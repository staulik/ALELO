package br.com.empresa.steps;

import java.util.List;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Entao;
import cucumber.api.java.pt.Quando;


public class FindAddrees {
	
	
	private WebDriver driver;

	
	@Dado("^que estou na pagina principal do correio$")
	public void queEstou() throws Throwable {
		  // Write code here that turns the phrase above into concrete actions
				System.setProperty("webdriver.chrome.driver","C:\\Users\\silvio.aulik\\Downloads\\Browsers\\chromedriver.exe");
				driver = new ChromeDriver();
				driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
				driver.get("http://www.buscacep.correios.com.br/sistemas/buscacep/BuscaCepEndereco.cfm/");
				driver.manage().window().maximize();
	}
		
	@Quando("^forneco o CEP desejado$")
	public void fornecoOCEPDesejado() throws Throwable {
	WebElement caixaDeBusca = driver.findElement(By.name("relaxation"));
	caixaDeBusca.clear();
	caixaDeBusca.sendKeys("05074010");
	WebElement botaoBusca = driver.findElement(By.xpath("//*[@id=\"Geral\"]/div/div/div[6]/input"));
	botaoBusca.click();
	}

	@Entao("^posso  visualizar as informacoes retornadas$")
	public void possoVisualizarAsInformaEsRetornadas() throws Throwable {
	String rua = driver.findElement(By.xpath("/html/body/div[1]/div[3]/div[2]/div/div/div[2]/div[2]/div[2]/table/tbody/tr[2]/td[1]")).getText();
	String bairro = driver.findElement(By.xpath("/html/body/div[1]/div[3]/div[2]/div/div/div[2]/div[2]/div[2]/table/tbody/tr[2]/td[2]")).getText();
	String localidade = driver.findElement(By.xpath("/html/body/div[1]/div[3]/div[2]/div/div/div[2]/div[2]/div[2]/table/tbody/tr[2]/td[3]")).getText();
	String cep = driver.findElement(By.xpath("/html/body/div[1]/div[3]/div[2]/div/div/div[2]/div[2]/div[2]/table/tbody/tr[2]/td[4]")).getText();
	System.out.println(rua + bairro + localidade + cep); 
	driver.close();
	
	}
	
	@Quando("^forneco o logradouro desejado$")
	public void fornecoOLogradouroDesejado() throws Throwable {
		WebElement caixaDeBusca = driver.findElement(By.name("relaxation"));
		caixaDeBusca.clear();
		caixaDeBusca.sendKeys("Rua George Smith");
		WebElement botaoBusca = driver.findElement(By.xpath("//*[@id=\"Geral\"]/div/div/div[6]/input"));
		botaoBusca.click();
		}
	

	@Entao("^posso visualizar as informacoes$")
	public void possoVisualizarAsInformacoes() throws Throwable {
	WebElement mytable = driver.findElement(By.xpath("/html/body/div[1]/div[3]/div[2]/div/div/div[2]/div[2]/div[2]/table"));
	List < WebElement > rows_table = mytable.findElements(By.tagName("tr"));
	int rows_count = rows_table.size();
	for (int row = 0; row < rows_count; row++) {
	    //To locate columns(cells) of that specific row.
	    List < WebElement > Columns_row = rows_table.get(row).findElements(By.tagName("td"));
	    //To calculate no of columns (cells). In that specific row.
	    int columns_count = Columns_row.size();
	    for (int column = 0; column < columns_count; column++) {
	        // Recupero o texto de uma célula especifica.
	        String celtext = Columns_row.get(column).getText();
	        System.out.println(celtext);
	    }
	   // System.out.println("-------------------------------------------------- ");
	}
	}
	
		
}
