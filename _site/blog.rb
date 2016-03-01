require "FileUtils"

class Blog
	def initialize
	p "Today's date...Enter for Today"
		@date = gets.chomp
		if @date === ""
			@today = true
			@date = Time.now.strftime("%Y-%m-%d")
		else
			@today = false
		end
	end
	def what_to_do()
		p '1 = Create new blog'
		new_blog = gets.chomp
		if new_blog === "1"
			create();
		end
	end

	def create()
		p "Name of blog"
			name = gets.chomp.gsub(' ', '-')
			file_name = "#{@date}-#{name}"
		p "name of file will be #{file_name}, hit enter if correct!"
			noop = gets.chomp
			unless noop === ""
				return
			end
		Dir.chdir "_posts"
		out_file = File.new("#{file_name}.markdown", "a+")
	end
end

blog = Blog.new
blog.what_to_do