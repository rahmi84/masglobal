package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utilities.Driver;

public class GooglePage {

    public GooglePage(){
        PageFactory.initElements(Driver.getDriver(), this);
    }

    @FindBy (xpath = "//input[@name='q']")
    public WebElement googleSearchBox;

    @FindBy (xpath = "//h3[@class='LC20lb DKV0Md']")
    public WebElement firstResultOfMovie ;

    @FindBy (xpath = "//span[text()='El nombre del viento - Wikipedia, la enciclopedia libre']")
    public WebElement firstResultOfW ;
    @FindBy (xpath = "h1[@id='firstHeading']")
    public WebElement heading ;
    @FindBy (xpath = "h1[@id='firstHeading']")
    public WebElement secondHeading ;
    @FindBy (xpath = "//span[text()='El nombre del viento — Novela de Patrick Rothfuss']")
    public WebElement firstSuggestion ;



}
