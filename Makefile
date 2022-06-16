develop:
	docker-compose up --build

production:
	docker-compose -f docker-compose.yml -f production.yml up --build -d
