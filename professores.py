from bs4 import BeautifulSoup
from sphinx.util import requests

url = "https://www.quixada.ufc.br/docente/"

response = requests.get(url)

html = response.text
soup = BeautifulSoup(html, 'lxml')

professoresDados = soup.find_all("div", class_="row")

# Pegando nomes
nome_professores = []
for professores in professoresDados:
   nome_professores.append(professores.find("h2").text.strip() if professores.find("h2") else "nao")

# Pegando comentários
comentario_professores = []
for comentario in professoresDados:
   comentario_professores.append(comentario.find("p").text.strip() if comentario.find("p") else "nao")

texto_sem_quebra = [i.replace("\n", " ") for i in comentario_professores]
# Falta pegar o link da foto e associar

# Associando dados em um dic
associando_professores = {}
for i in range(len(nome_professores)):
   associando_professores[nome_professores[i]] = texto_sem_quebra[i]

print(associando_professores)
