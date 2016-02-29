require "google/api_client"
require "google_drive"
require 'openssl'
OpenSSL::SSL::VERIFY_PEER = OpenSSL::SSL::VERIFY_NONE

class Water
	def initialize
		# Creates a session. This will prompt the credential via command line for the
		# first time and save it to config.json file for later usages.
		session = GoogleDrive.saved_session("config.json")

		# First worksheet of
		# https://docs.google.com/spreadsheet/ccc?key=pz7XtlQC-PYx-jrVMJErTcg
		# Or https://docs.google.com/a/someone.com/spreadsheets/d/pz7XtlQC-PYx-jrVMJErTcg/edit?usp=drive_web
		ws = session.spreadsheet_by_key("1xlOorpivOmFpEcWvCKn_rF9yRMGUNEB9JaIE4-ZUtAU").worksheets[0]

		p 'Did you water them today? Enter if yes!'
		date = 'n/a'
		ans = gets.chomp
		if ans === ""
			date = Time.now.strftime("%B %d, %Y")
		else
			p 'Edit Live'
		end

		p 'Which box are you using, 1=veg 2=flower'
		box = 'n/a'
		ans = gets.chomp
		if ans === "1"
			box = 'veg'
		elsif ans === "2"
			box = 'flower'
		end

		p 'Water by the half gallon'
		water = gets.chomp

		p 'Did you use any nutes? y/n'
		ans = gets.chomp
		nutes = 'none'
		if ans === 'y'
			p 'What nutes did you use (as array)?'
			p '1: Big Bloom, 2: Grow Big, 3: Tiger Bloom, 4: Other'
			ans_nutes = gets.chomp
			nutes = []
			ans_nutes.split(',').each do |x|
				if x === '1'
					y = 'Big Bloom'
					p 'Big Bloom'
				elsif x === '2'
					y = 'Grow Big'
					p 'Grow Big'
				elsif x === '3'
					y = 'Tiger Bloom'
					p 'Tiger Bloom'
				elsif x === '4'
					p 'What was the other nutes that you used?'
					y = gets.chomp
					p y
				end
				p 'What percentage did you use? (.5)'
				ans_perc = gets.chomp
				nutes << [y, ans_perc]
			end
		end

		p "How long are the #{box} lights on for?"
		lights = gets.chomp

		p 'Did you use any extra nutrients? y/n'
		ans = gets.chomp
		extras = 'none'
		if ans === 'y'
			p 'What extras did you use?'
			p '1: Molasses, 2: Milk, 3: Other'
			ans_nutes = gets.chomp
			extras = []
			ans_nutes.split(',').each do |x|
				if x === '1'
					y = 'Molasses'
					p 'Molasses'
				elsif x === '2'
					y = 'Mil'
					p 'Milk'
				elsif x === '3'
					p 'What were the other extras that you used?'
					y = gets.chomp
					p y
				end
				p 'What percentage did you use? (.5)'
				ans_perc = gets.chomp
				extras << [y, ans_perc]
			end
		end

		p 'Did you use calmag? y/n'
		calmag = 'FALSE'
		ans = gets.chomp
		if ans === "y"
			calmag = 'TRUE'
		end

		next_row = ws.num_rows + 1
		ak = [date, box, water, nutes, lights, extras, calmag]

		ak.each_with_index do |word, i|
			ws[next_row, i+1] = word
		end
		ws.save  #==> [["fuga", ""], ["foo", "bar]]

		# Reloads the worksheet to get changes by other clients.
		ws.reload
	end
end

water = Water.new