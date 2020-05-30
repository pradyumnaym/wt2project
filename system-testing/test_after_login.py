import unittest
from selenium import webdriver
import time
from random import randint

class SearchText(unittest.TestCase):
    def setUp(self):
        # create a new Firefox session
        #self.driver = webdriver.Firefox()
        self.driver =  webdriver.Chrome("D:\sem6\WT2\chromedriver_win32\chromedriver.exe")  
        self.driver.implicitly_wait(30)
        self.driver.maximize_window()
        # navigate to the application home page
        self.driver.get("http://localhost:4200/login/")

        self.search_field = self.driver.find_element_by_name("username")

        self.search_field.send_keys("anushkini3")

        self.search_field = self.driver.find_element_by_name("password")

        self.search_field.send_keys("anushkini3")
        self.search_field.submit()
        time.sleep(2)
        self.driver.get("http://localhost:4200/home/")

    def utest_home_after_login(self):
       
        k = self.driver.find_elements_by_xpath("//app-header/div/ul/li")
        #print("see:-   ",len(k))
        self.assertEqual(len(k), 8)

    def test_profile_edits(self):

        self.driver.get("http://localhost:4200/profile/")
        k = self.driver.find_elements_by_xpath("//div[@class='center']/button")
        #print("see:-   ",len(k))
        k[0].click()
        time.sleep(1)
        fb = self.driver.find_elements_by_xpath("//input[@placeholder='Enter Facebook link ']")
        randnum = randint(1,101)
        fb[0].send_keys("https://www.facebook.com/-"+str(randnum))
        self.driver.find_elements_by_xpath("//button[@id='fb_update']")[0].click()
       

        #edit info
        write = self.driver.find_element_by_xpath("//p[@id='summary']")
        write.click()
        write.clear()
        write.send_keys("My num is "+ str(randnum))
        self.driver.find_elements_by_xpath("//button[@id='edit_tag']")[0].click()
        
        k[1].click()

        edited_info = self.driver.find_element_by_xpath("//p[@id='summary']").text

        self.assertEqual(edited_info, "My num is "+ str(randnum))
        
        self.driver.find_elements_by_xpath("//a[@id='fb']")[0].click() 
        self.driver.switch_to_window(self.driver.window_handles[-1])
        #time.sleep(1)
        url_redirect = self.driver.current_url
        self.assertEqual(url_redirect, "https://www.facebook.com/-"+str(randnum))
        

    def tearDown(self):
        # close the browser window
        self.driver.quit()

if __name__ == '__main__':
    unittest.main()