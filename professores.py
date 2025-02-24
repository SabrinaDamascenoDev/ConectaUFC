from bs4 import BeautifulSoup
from sphinx.util import requests

url = "https://www.quixada.ufc.br/docente/"

response = requests.get(url)

html = response.text
soup = BeautifulSoup(html, 'lxml')

nome_professores = []

nomes_professores = soup.find_all("div", class_="row")
print(nomes_professores)
for professores in nomes_professores:
   nome_professores.append(professores.find("h2").text.strip() if professores.find("h2") else "nao")

comentario_professores = []

for comentario in nomes_professores:
   comentario_professores.append(comentario.find("p").text.strip() if comentario.find("p") else "nao")

texto_sem_quebra = [i.replace("\n", " ") for i in comentario_professores]

associando_professores = {}
for i in range(len(nome_professores)):
   associando_professores[nome_professores[i]] = texto_sem_quebra[i]

print(associando_professores)
