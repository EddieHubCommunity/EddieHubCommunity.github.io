Feature: Homepage

  I want to see the page has the correct content and functionality

  Scenario: Open the homepage and check title
    Given I open the website
    Then I see "Eddie Jaoude Community" in the title

  Scenario: Project link goes to GitHub
    Given I open the website
    Then I see "/EddieBot" in "#projects a:first" with a "href"
