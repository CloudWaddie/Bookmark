# Specify the source directory and file
SRC_DIR := attempt
SRC_FILE := launcher.js

# Specify the output directory and file
OUT_DIR := dist
OUT_FILE := bookmarklet.js

# Define the build target
.PHONY: build
build:
	@mkdir -p $(OUT_DIR)
	@awk 'BEGIN { html = ""; while((getline line < "page.html") > 0) html = html line "\n" } { gsub("{html}", html) } 1' launcher.js > $(OUT_DIR)/compiled.js
	@minify $(OUT_DIR)/compiled.js > $(OUT_DIR)/minified.js
	@rm $(OUT_DIR)/compiled.js