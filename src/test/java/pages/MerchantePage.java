package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utilities.Driver;

public class MerchantePage {

    public MerchantePage(){
        PageFactory.initElements(Driver.getDriver(), this);
    }

    @FindBy(id = "users")
    public WebElement User_Menu_Button;

    @FindBy(xpath = "//*[@class='action_item']/a")
    public WebElement New_User_Button;

    @FindBy(id = "user_username")
    public WebElement Create_UserName;

    @FindBy(id = "user_password")
    public WebElement Create_Password;

    @FindBy(id = "user_email")
    public WebElement Create_Email;

    @FindBy(id = "user_submit_action")
    public WebElement Create_User_Button;

    @FindBy(xpath = "//*[@class='flash flash_notice']")
    public WebElement Create_Success_message;

    @FindBy(xpath = "//*[@class='row row-email']/td")
    public WebElement Created_email_id;
    @FindBy(id = "q_username")
    public WebElement Filter_username_Search;

    @FindBy(id = "q_email")
    public WebElement Filter_email_Search;
    @FindBy(xpath = "//td[@class='col col-username']")
    public WebElement usernameResult;
    @FindBy(xpath = "//td[@class='col col-email']")
    public WebElement emailResult;


    @FindBy(xpath = "//*[@value='Filter']")
    public WebElement Filter_button;

    @FindBy(xpath = "//*[@id='index_table_users']//tbody//td[@class='col col-username']")
    public WebElement Filter_Search_table_User;

    @FindBy(xpath = "//*[@id='index_table_users']//tbody//td[@class='col col-email']")
    public WebElement Filter_Search_table_Email;


}
