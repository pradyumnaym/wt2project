import unittest
from selenium import webdriver
import time

class SearchText(unittest.TestCase):
    def setUp(self):
        # create a new Firefox session
        #self.driver = webdriver.Firefox()
        self.driver =  webdriver.Chrome("D:\sem6\WT2\chromedriver_win32\chromedriver.exe")  
        self.driver.implicitly_wait(30)
        self.driver.maximize_window()
        # navigate to the application home page
        self.driver.get("http://localhost:4200/")

    def test_invalid_login(self):
       
        self.driver.get("http://localhost:4200/login/")

        self.search_field = self.driver.find_element_by_name("username")

     
        self.search_field.send_keys("anush")
       

        self.search_field = self.driver.find_element_by_name("password")

    
        self.search_field.send_keys("anush")
        self.search_field.submit()

        time.sleep(2)
        url_redirect = self.driver.current_url

        self.assertEqual(url_redirect, "http://localhost:4200/login")

    
    def test_valid_login(self):
       
        self.driver.get("http://localhost:4200/login/")

        self.search_field = self.driver.find_element_by_name("username")

        self.search_field.send_keys("tester2")

        self.search_field = self.driver.find_element_by_name("password")

        self.search_field.send_keys("tester2")
        self.search_field.submit()

       
        time.sleep(2)
        url_redirect = self.driver.current_url

        self.assertEqual(url_redirect, "http://localhost:4200/home")

    def test_home_before_login(self):
       
        self.driver.get("http://localhost:4200/home/")
        k = self.driver.find_elements_by_xpath("//app-header/div/ul/li")
        #print("see:-   ",len(k))
        self.assertEqual(len(k), 3)

    def test_home_games_need_login(self):
       
        self.driver.get("http://localhost:4200/home/")
        k = self.driver.find_elements_by_xpath("//div[@class='bottomright']")
       # print("see:-   ",len(k))
        k[0].click()
        time.sleep(2)
        url_redirect = self.driver.current_url
        self.assertEqual(url_redirect, "http://localhost:4200/login")

    def test_home_games_no_login(self):
       
        self.driver.get("http://localhost:4200/home/")
        k = self.driver.find_elements_by_xpath("//div[@class='bottomright']")
       # print("see:-   ",len(k))
        k[2].click()
        time.sleep(2)
        url_redirect = self.driver.current_url
        self.assertEqual(url_redirect, "http://localhost:4200/assets/Breakout_game/index.html")

    

    def tearDown(self):
        # close the browser window
        self.driver.quit()

if __name__ == '__main__':
    unittest.main()