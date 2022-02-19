
all:
	npx eslint src/**/*.ts
	rm -rf dist
	mkdir -p output
	npx tsc
	node dist/main
	pandoc output/constitucion.md -o output/constitucion.pdf
