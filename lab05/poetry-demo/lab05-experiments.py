import requests
from bs4 import BeautifulSoup

def main():
    print("hello world")
    # user_agent makes it seem like the request is coming from a web browser (versus a bot)
    user_agent = {'User-agent': 'Mozilla/5.0'}
    response = requests.get("https://new.cs.unca.edu/", headers=user_agent)
    soup =BeautifulSoup(response.content, 'html.parser')
    link = soup.find_all('a')
    for link in link:
            url = link.get('href')
            print(url)
    print(response.content)

if __name__ == "__main__":
    main()
