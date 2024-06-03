REACT_DIR = D:\Desktop\My_Project_SQL/reactfront
NODE_DIR =  D:\Desktop\My_Project_SQL/node

.PHONY: start-react start-node start clean

start-react:
	@echo "Iniciando la aplicacion React..."
	cd $(REACT_DIR) && npm start

start-node:
	@echo "Iniciando la aplicacion Node.js..."
	cd $(NODE_DIR) && nodemon app

start: start-react start-node

clean:
	@echo "Limpiando dependencias..."
	cd $(REACT_DIR) && rm -rf node_modules
	cd $(NODE_DIR) && rm -rf node
