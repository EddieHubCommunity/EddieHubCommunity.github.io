Feature: Homepage

  I want to see the page has the correct content and functionality

  Scenario: Open the homepage and check title
    Given I open the website
    Then I see "Eddie Jaoude Community" in the title

  Scenario: Project title contains id of projects
    Given I open the website
    Then I see "projects" in "#projects" with a "id"

  Scenario: Project link goes to GitHub
    Given I open the website
    Then I see "/EddieBot" in "#projects a:first" with a "href"

  Scenario: Youtube link goes to site
    Given I open the website
    Then I see "https://youtube.com/eddiejaoude?sub_confirmation=1" in "div.mt-6 a:first" with a "href"

  Scenario: GitHub link goes to site
    Given I open the website
    Then I see "http://github.com/EddieJaoudeCommunity" in "div.mt-6 a:nth-child(2)" with a "href"

  Scenario: Discord link goes to invite page
    Given I open the website
    Then I see "https://discord.com/invite/jZQs6Wu" in "div.mt-6 a:nth-child(3)" with a "href"

