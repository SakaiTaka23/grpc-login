COMPOSE = docker-compose
UP = $(COMPOSE) up
RUN = docker run
RUN_RM = $(RUN) --rm

PROTO_DIR = proto/*.proto
PROTO_OUT_BACK = backend/proto
PROTO_OUT_FRONT = frontend/proto

PROTO_CMD_BACK = protoc \
	-I=proto $(PROTO_DIR) \
    --go_out=$(PROTO_OUT_BACK) --go_opt=paths=source_relative \
    --go-grpc_out=$(PROTO_OUT_BACK) --go-grpc_opt=paths=source_relative \
	--validate_out="lang=go:$(PROTO_OUT_BACK)"

PROTO_CMD_FRONT = protoc \
	-I=proto $(PROTO_DIR) \
	--js_out=import_style=commonjs,binary:$(PROTO_OUT_FRONT) \
	--grpc-web_out=import_style=typescript,mode=grpcwebtext:$(PROTO_OUT_FRONT)

DOC_CMD = $(RUN_RM) \
  	-v $(PWD)/doc:/out \
  	-v $(PWD)/proto:/protos \
  	pseudomuto/protoc-gen-doc \
	--doc_opt=out/template.tmpl,index.html

up:
	$(UP)
back: db
	$(UP) back
front:
	$(UP) front
db:
	$(UP) db

build:
	$(COMPOSE) build

tidy:
	$(COMPOSE) run back go mod tidy

protoc: protoc-back protoc-front protoc-doc
	$(info Made code for backend, frontend and doc)

protoc-back:
	$(info Making code from proto files for backend)
	@rm -f backend/proto/*.proto
	@$(PROTO_CMD_BACK)

protoc-front:
	$(info Making code from proto files for frontend)
	@rm -f frontend/proto/*.ts
	@rm -f frontend/proto/*.js
	$(PROTO_CMD_FRONT)

protoc-doc: proto/*.proto
	$(info Making docs from proto files)
	@$(DOC_CMD)

doc-open:
	$(info See the doc on the browser)
	open doc/index.html
