window.onload = function() {
    const editor = new EditorJS({
        holder: 'editorjs',
        tools: {
            header: {
                class: Header,
                inlineToolbar: ['link'],
                config: {
                    placeholder: 'Enter a header'
                },
                shortcut: 'CMD+SHIFT+H'
            },
            image: {
                class: ImageTool,
                config: {
                    endpoints: {
                        byFile: 'http://localhost:8008/uploadFile', // Your backend file uploader endpoint
                        byUrl: 'http://localhost:8008/fetchUrl', // Your endpoint that provides uploading by URL
                    }
                }
            },
            list: {
                class: List,
                inlineToolbar: true,
                shortcut: 'CMD+SHIFT+L'
            },
            quote: {
                class: Quote,
                inlineToolbar: true,
                config: {
                    quotePlaceholder: 'Enter a quote',
                    captionPlaceholder: 'Quote\'s author',
                },
                shortcut: 'CMD+SHIFT+O'
            },
            code: {
                class: CodeTool,
                shortcut: 'CMD+SHIFT+C'
            },
            linkTool: {
                class: LinkTool,
                config: {
                    endpoint: 'http://localhost:8008/fetchUrl', // Your backend endpoint for url data fetching
                }
            },
            raw: RawTool,
            inlineCode: {
                class: InlineCode,
                shortcut: 'CMD+SHIFT+C'
            },
            embed: Embed,
            table: {
                class: Table,
                inlineToolbar: true,
                config: {
                    rows: 2,
                    cols: 3
                },
                shortcut: 'CMD+SHIFT+T'
            },
            paragraph: {
                class: Paragraph,
                inlineToolbar: true
            }
        },
        data: {
            blocks: [
                {
                    type: "header",
                    data: {
                        text: "Editor.js",
                        level: 2
                    }
                },
                {
                    type: "paragraph",
                    data: {
                        text: "Hello! This is Editor.js - a block-styled editor."
                    }
                },
                {
                    type: "image",
                    data: {
                        file: {
                            url: "https://via.placeholder.com/150"
                        },
                        caption: "Image caption",
                        withBorder: true,
                        withBackground: false,
                        stretched: false
                    }
                },
                {
                    type: "list",
                    data: {
                        style: "unordered",
                        items: [
                            "Item 1",
                            "Item 2",
                            "Item 3"
                        ]
                    }
                },
                {
                    type: "quote",
                    data: {
                        text: "This is a quote block.",
                        caption: "Author Name",
                        alignment: "left"
                    }
                },
                {
                    type: "code",
                    data: {
                        code: "console.log('Hello, world!');"
                    }
                }
            ]
        }
    });
};
