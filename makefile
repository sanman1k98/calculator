
.PHONY : serve

serve :
	@echo "Go to http://localhost:9090 in your browser"
	python3 -m http.server 9090 --directory "./page/"
