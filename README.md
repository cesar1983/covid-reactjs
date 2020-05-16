Corona...

deploy no heroku : https://covid-global.herokuapp.com/

precisei usar um buildpack pra fazer funcionar a publicação do projeto lá

pra fazer o deploy tem que ter o heroku cli instalado, logar na sua conta por ele

a

tem que adicionar o host do git do heroku no projeto onde vai publicar
heroku git:remote -a covid-global

rodar :
heroku buildpacks:set mars/create-react-app

mandar tudo pra la ( git push heroku master ), orar e boa...
