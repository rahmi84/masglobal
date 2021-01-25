package stepdefinitions;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.testng.Assert;
import pages.MerchantePage;
import utilities.ConfigReader;
import utilities.Driver;

import java.util.concurrent.TimeUnit;

public class UIStepDefinitions {

    MerchantePage merchantePage=new MerchantePage();
 WebDriver driver;
    @Given("user is on given endpoint")
    public void userIsOnGivenEndpoint() {
        Driver.getDriver().get(ConfigReader.getProperty("UI_endpoint"));
    }

    @And("clicks on users")
    public void clicksOnUsers() {
       merchantePage.User_Menu_Button.click();
    }

    @Given("clicks on new user")
    public void clicks_on_new_user() {
        merchantePage.New_User_Button.click();

    }

    @When("user enters the firstname {string}")
    public void userEntersTheFirstname(String username) {
        merchantePage.Create_UserName.sendKeys(username);
    }

    @When("user enters the password {string}")
    public void user_enters_the_password(String password) {
        merchantePage.Create_Password.sendKeys(password);

    }

    @And("user enters the email {string}")
    public void userEntersTheEmail(String email) {
        merchantePage.Create_Email.sendKeys(email);
    }
    @And("clicks on create button")
    public void clicksOnCreateButton() {
        merchantePage.Create_User_Button.click();
    }
    @Then("Verifies if {string}")
    public void verifies_if(String string) {
        Assert.assertTrue( merchantePage.Create_Success_message.isDisplayed());

    }


   @And("user click on users button")
   public void userClickOnUsersButton() {
       merchantePage.User_Menu_Button.click();
   }

   @When("user enter username in the filter box {string}")
   public void userEnterUsernameInTheFilterBox(String username) {
       merchantePage.Filter_username_Search.sendKeys(username);
   }

   @And("clicks on filter button")
   public void clicksOnFilterButton() {
       merchantePage.Filter_button.click();
   }

   @Then("verifies if selected username {string} is displayed")
   public void verifiesIfSelectedUsernameIsDisplayed(String username) {
       String actualUsername =merchantePage.usernameResult.getText();
       String expectedUsername=username;
       Assert.assertEquals(actualUsername,expectedUsername);
   }

   @When("user enter email in the filter box {string}")
   public void userEnterEmailInTheFilterBox(String email) {
        merchantePage.Filter_email_Search.sendKeys(email);
   }

   @Then("verifies if selected email {string} is displayed")
   public void verifiesIfSelectedEmailIsDisplayed(String email) {
        String actualEmail=merchantePage.emailResult.getText();
       String expectedEmail= email;
       Assert.assertEquals(actualEmail,expectedEmail);
   }
}
