REACT_DIR = D:\Desktop\My_Project-_SQL/reactfront
NODE_DIR =  D:\Desktop\My_Project-_SQL/node

.PHONY: start-react start-node start clean

start-react:
	@echo "Iniciando la aplicación React..."
	cd $(REACT_DIR) && npm start

start-node:
	@echo "Iniciando la aplicación Node.js..."
	cd $(NODE_DIR) && nodemon app

start: start-react start-node

clean:
	@echo "Limpiando dependencias..."
	cd $(REACT_DIR) && rm -rf node_modules
	cd $(NODE_DIR) && rm -rf node
