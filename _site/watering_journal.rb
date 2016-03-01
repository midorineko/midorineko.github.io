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
		@ws = session.spreadsheet_by_key("1xlOorpivOmFpEcWvCKn_rF9yRMGUNEB9JaIE4-ZUtAU").worksheets[0]
	end
	
	def new_entry()
	
		p 'Did you water them right now? (y/n)'
		ans = gets.chomp
		if ans === "" || ans === "y"
			date = Time.now.strftime("%B %d, %Y")
			date2 = Time.now.hour
		else
			p 'What date did you water them?'
			date = gets.chomp
			p 'What hour did you them in military'
			date2 = gets.chomp
		end
		p 'Which box did you water? (1=veg 2=flower)'
		box = 'n/a'
		ans = gets.chomp
		if ans === "1"
			box = 'veg'
		elsif ans === "2"
			box = 'flower'
		end
	
		box2= box.upcase
		p "How long are the #{box2} lights on for?"
		lights = gets.chomp
	
		p 'Amount of water used by 1/2 gallon?'
		water = gets.chomp
	
		p 'Did you use any nutes? y/n'
		ans = gets.chomp
		nutes = 'none'
		if ans === 'y'
			p 'What nutes did you use (as array)?'
			p '1: Big Bloom, 2: Grow Big, 3: Tiger Bloom, 4: Other'
			ans_nutes = gets.chomp
			nutes = []
			ans_nutes.split('').each do |x|
				if x === '1'
					y = 'Big Bloom'
				elsif x === '2'
					y = 'Grow Big'
				elsif x === '3'
					y = 'Tiger Bloom'
				elsif x === '4'
					p 'What was the other nutes that you used?'
					y = gets.chomp
					p y
				end
				p "What percentage of #{y} did you use? (.5)"
				ans_perc = gets.chomp.to_f * 100
				nutes << [y, "#{ans_perc}%"]
			end
		end
	
		p 'Did you use calmag? y/n'
		calmag = 'TRUE'
		ans = gets.chomp
		if ans === "n"
			calmag = 'FALSE'
		end
	
		p 'Did you use any extra nutrients? y/n'
		ans = gets.chomp
		extras = 'none'
		if ans === 'y'
			p 'What extras did you use?'
			p '1: Molasses, 2: Milk, 3: Other'
			ans_nutes = gets.chomp
			extras = []
			ans_nutes.split('').each do |x|
				if x === '1'
					y = 'Molasses'
					p 'How much molasses did you use tbs/ga?'
					ans_perc = gets.chomp
					ans_perc += ' tbs/ga'
				elsif x === '2'
					y = 'Milk'
					p 'How much milk did you use ounces/ga?'
					ans_perc = gets.chomp
					ans_perc += ' oz/ga'
				elsif x === '3'
					p 'What were the other extras that you used?'
					y = gets.chomp
					p "How much #{y} did you use with the unit user per gallon?"
					ans_perc = gets.chomp
					ans_perc += "/ga"
				end
				extras << [y, ans_perc]
			end
		end
	
		p 'Any other issues?'
		issues = gets.chomp
	
		next_row = @ws.num_rows + 1
		ak = [date, date2, box, water, nutes, lights, extras, calmag, issues]
	
		ak.each_with_index do |word, i|
			@ws[next_row, i+1] = word
		end
		@ws.save  #==> [["fuga", ""], ["foo", "bar]]
	
		# Reloads the worksheet to get changes by other clients.
		@ws.reload
	end

	def last_two()
		last_two = @ws.rows.last(2)
		p last_two.first
		p last_two.last
	end
end
water = Water.new
p 'Is this a new entry? (y/n)'
ans = gets.chomp
if ans === 'n'
	p 'See last two waterings? y/n'
	ans = gets.chomp
  if ans === "y" || ans === ""
    water.last_two()
  end
else
	water.new_entry()
end