---
layout: post
title:  "Speeding up RSPEC tests"
date:   2016-05-31
categories: learnings
author: 'Steven Inouye'
subtitle: 'Feature tests and Policies '
---

My first duties as a new Butter employee was to flush out their test suite. I was to go in and feature test for index, update, and show for multiple areas in our application. I was also asked to test different users(Steward, Admin, User) ability to interact with the information.

I quickly completed this task by uploading a minimum of 9 feature tests per area in our application. Each area in our application was testing the three users ability to interact with the three methods. This was accurately testing the feature and different users abilities to interact with the feature, however it was incredibly slow. After making it through just two feature test our RSPEC timer went from 2.5s to 6.5s. This was just taking too long and was just going to get worse for every tests.

The resolution:

Test the happy path for the feature. If you are testing if a feature if able to update and only admins can update, test if an admin can update in the feature test. Remove tests that show multiple users being able to access a feature or multiple users not being able to access a feature. These tests will all be done in the policies spec.


Policy spec is made to test how different users are able to interact with methods. So a Steward, Admin, and User can be tested against a method and we can see if they are permitted or not.

{% highlight ruby %}
  permissions :index? do
    it "allow access for users into event index" do
      expect(subject).to permit(user)
    end
    it "allow access for stewards into event index" do
      expect(subject).to permit(steward)
    end
    it "allow access for admins into event index" do
      expect(subject).to permit(admin)
    end
  end
{% endhighlight %}

Helpful hints:

1) Before and After tags do speed up your tests.

2) Create is faster than Build, Build_stubbed is the fastest

--However these all interaction with associations differently, make sure you are using the

correct one. Otherwise I believe RSPEC best practice is to default to build_stubbed.

3) Don't sign in, as the first step of every feature test.

--Use something like Warden to help you sign in. It will dramatically cut down your time

waiting for each test to login.

4) Be concise with your tests, don't add superfluous matching.
