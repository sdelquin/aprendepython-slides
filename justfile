set working-directory := 'src'

dev: install
    npm run dev

build: install
    echo 'Build project'

install:
    npm install
