import { BaseProvider, getOpenAILikeModel } from '~/lib/modules/llm/base-provider';
import type { ModelInfo } from '~/lib/modules/llm/types';
import type { IProviderSetting } from '~/types/model';
import type { LanguageModelV1 } from 'ai';

export default class OpenAILikeProvider extends BaseProvider {
  name = 'OpenAILike';
  getApiKeyLink = undefined;

  config = {
    baseUrlKey: 'OPENAI_LIKE_API_BASE_URL',
    apiTokenKey: 'OPENAI_LIKE_API_KEY',
  };

  staticModels: ModelInfo[] = [];

  async getDynamicModels(
    apiKeys?: Record<string, string>,
    settings?: IProviderSetting,
    serverEnv: Record<string, string> = {},
  ): Promise<ModelInfo[]> {
    const { baseUrl, apiKey } = this.getProviderBaseUrlAndKey({
      apiKeys,
      providerSettings: settings,
      serverEnv,
      defaultBaseUrlKey: 'OPENAI_LIKE_API_BASE_URL',
      defaultApiTokenKey: 'OPENAI_LIKE_API_KEY',
    });

    if (!baseUrl || !apiKey) {
      return [];
    }


    const response = '[\n' +
      '    {\n' +
      '        "id": "openai/Qwen3",\n' +
      '        "name": "Alibaba Qwen 3 32B",\n' +
      '        "base_url": "http://homeport-inference.homeport-common:8080/openai/v1",\n' +
      '        "api_key": "",\n' +
      '        "api_version": null,\n' +
      '        "speed": "Medium",\n' +
      '        "location": "Germany",\n' +
      '        "intelligence_level": "Advanced",\n' +
      '        "modalities": [\n' +
      '            "Text"\n' +
      '        ],\n' +
      '        "logo": "/static/model-logos/qwen.png",\n' +
      '        "supports_tool_calling": true,\n' +
      '        "enabled_features": [\n' +
      '            {\n' +
      '                "description": "Perform a detailed web search.",\n' +
      '                "germanDescription": "Eine detaillierte Websuche durchführen.",\n' +
      '                "id": "web_search",\n' +
      '                "name": "Web Search",\n' +
      '                "germanName": "Websuche",\n' +
      '                "requiredConfigParams": null,\n' +
      '                "tools": [\n' +
      '                    {\n' +
      '                        "id": "web_search",\n' +
      '                        "name": "Deep Research",\n' +
      '                        "germanName": "Deep Research",\n' +
      '                        "description": "Performs a web search.",\n' +
      '                        "germanDescription": "Eine Websuche durchführen."\n' +
      '                    }\n' +
      '                ]\n' +
      '            },\n' +
      '            {\n' +
      '                "description": "Create and Edit images.",\n' +
      '                "germanDescription": "Erstellen und Ändern von Bildern.",\n' +
      '                "id": "image_generation",\n' +
      '                "name": "Image Generation",\n' +
      '                "germanName": "Bilderzeugung",\n' +
      '                "requiredConfigParams": null,\n' +
      '                "tools": [\n' +
      '                    {\n' +
      '                        "id": "create_image",\n' +
      '                        "name": "Create a new image",\n' +
      '                        "germanName": "Ein neues Bild erstellen",\n' +
      '                        "description": "Generates a new image based on a prompt.",\n' +
      '                        "germanDescription": "Erstellt ein neues Bild basierend auf einer Prompt."\n' +
      '                    },\n' +
      '                    {\n' +
      '                        "id": "edit_image",\n' +
      '                        "name": "Edit an existing image",\n' +
      '                        "germanName": "Ein existierendes Bild ändern",\n' +
      '                        "description": "Edits an existing image based on a prompt and an image ID.",\n' +
      '                        "germanDescription": "Bearbeitet ein vorhandenes Bild auf der Grundlage einer Prompt und einer Bild-ID."\n' +
      '                    },\n' +
      '                    {\n' +
      '                        "id": "create_image_from_html",\n' +
      '                        "name": "Html to Image",\n' +
      '                        "germanName": "Html zu Bild",\n' +
      '                        "description": "Generate an Image from an html snippet",\n' +
      '                        "germanDescription": "Html-Code in ein Bild umwandeln"\n' +
      '                    },\n' +
      '                    {\n' +
      '                        "id": "add_response_items",\n' +
      '                        "name": "Citations",\n' +
      '                        "germanName": "Quellenangaben",\n' +
      '                        "description": "Let the agent return pages and images in their response.",\n' +
      '                        "germanDescription": "Bilder und Seiten in der Antwortnachricht anzeigen."\n' +
      '                    }\n' +
      '                ]\n' +
      '            },\n' +
      '            {\n' +
      '                "description": "Perform document actions like summarization, finding information in a document, creating word documents from markdown, fill out pdf forms.",\n' +
      '                "germanDescription": "Aktionen wie Zusammenfassen, Informationen in Dokumenten finden, Erstellen von Dokumenten aus Markdown-Text und Ausfüllen von PDF-Formularen.",\n' +
      '                "id": "document_management",\n' +
      '                "name": "Document Management",\n' +
      '                "germanName": "Dokumentenverwaltung",\n' +
      '                "requiredConfigParams": null,\n' +
      '                "tools": [\n' +
      '                    {\n' +
      '                        "id": "compress_document",\n' +
      '                        "name": "Document Compressor",\n' +
      '                        "germanName": "Dokumentkompressor",\n' +
      '                        "description": "Compress a document into a smaller amount of tokens by extracting key facts.",\n' +
      '                        "germanDescription": "Komprimierung eines Dokuments in eine geringere Anzahl von Token durch Extraktion von Schlüsselfakten."\n' +
      '                    },\n' +
      '                    {\n' +
      '                        "id": "get_document_pages",\n' +
      '                        "name": "Semantic page search",\n' +
      '                        "germanName": "Semantische Seitensuche",\n' +
      '                        "description": "Returns document pages including their metadata and content in the order of their semantic relevancy in regard to the given search query.",\n' +
      '                        "germanDescription": "Liefert Dokumentenseiten einschließlich ihrer Metadaten und Inhalte in der Reihenfolge ihrer semantischen Relevanz für die gegebene Suchanfrage."\n' +
      '                    },\n' +
      '                    {\n' +
      '                        "id": "get_document_pages_sequentially",\n' +
      '                        "name": "Get Document Pages Sequentially",\n' +
      '                        "germanName": "Dokumentenseiten der Reihe nach abrufen",\n' +
      '                        "description": "Get a number of document pages from a given start index ordered by page number.",\n' +
      '                        "germanDescription": "Rückgabe von Dokumentseiten ab einem bestimmten Startindex, geordnet nach Seitenzahl."\n' +
      '                    },\n' +
      '                    {\n' +
      '                        "id": "get_text_clusters",\n' +
      '                        "name": "Text Clustering",\n' +
      '                        "germanName": "Text Clustering",\n' +
      '                        "description": "Get a set of representative Texts for given files or folders.",\n' +
      '                        "germanDescription": "Ermittelt eine Reihe von repräsentativen Texten für mehrere Dateien oder Ordner."\n' +
      '                    },\n' +
      '                    {\n' +
      '                        "id": "create_docx_from_markdown",\n' +
      '                        "name": "Document Creator",\n' +
      '                        "germanName": "Dokumente erstellen",\n' +
      '                        "description": "Create a new document by a given Markdown text and a dictionary containing image placeholders and Images.",\n' +
      '                        "germanDescription": "Ein neues Dokument erzeugen basierend auf einem Markdown-Text und einer Liste von Bild-Platzhaltern."\n' +
      '                    },\n' +
      '                    {\n' +
      '                        "id": "add_response_items",\n' +
      '                        "name": "Citations",\n' +
      '                        "germanName": "Quellenangaben",\n' +
      '                        "description": "Let the agent return pages and images in their response.",\n' +
      '                        "germanDescription": "Bilder und Seiten in der Antwortnachricht anzeigen."\n' +
      '                    },\n' +
      '                    {\n' +
      '                        "id": "fillout_pdf_file",\n' +
      '                        "name": "PDF Filler",\n' +
      '                        "germanName": "PDF-Ausfüllhilfe",\n' +
      '                        "description": "Fill a pdf file with given information.",\n' +
      '                        "germanDescription": "Füllen Sie eine pdf-Datei mit den angegebenen Informationen aus."\n' +
      '                    }\n' +
      '                ]\n' +
      '            }\n' +
      '        ],\n' +
      '        "is_open_source_model": true\n' +
      '    },\n' +
      '    {\n' +
      '        "id": "openai/Mistral",\n' +
      '        "name": "Mistral Small 3.2 24B",\n' +
      '        "base_url": "http://homeport-inference.homeport-common:8080/openai/v1",\n' +
      '        "api_key": "",\n' +
      '        "api_version": null,\n' +
      '        "speed": "Medium",\n' +
      '        "location": "Germany",\n' +
      '        "intelligence_level": "Basic",\n' +
      '        "modalities": [\n' +
      '            "Text"\n' +
      '        ],\n' +
      '        "logo": "/static/model-logos/mistral.png",\n' +
      '        "supports_tool_calling": false,\n' +
      '        "enabled_features": [],\n' +
      '        "is_open_source_model": false\n' +
      '    },\n' +
      '    {\n' +
      '        "id": "anthropic/claude-sonnet-4-20250514",\n' +
      '        "name": "Anthropic Claude Sonnet 4",\n' +
      '        "base_url": "https://api.anthropic.com/v1/messages",\n' +
      '        "api_key": "",\n' +
      '        "api_version": null,\n' +
      '        "speed": "Medium",\n' +
      '        "location": "USA",\n' +
      '        "intelligence_level": "High",\n' +
      '        "modalities": [\n' +
      '            "Text",\n' +
      '            "Image"\n' +
      '        ],\n' +
      '        "logo": "/static/model-logos/claude.svg",\n' +
      '        "supports_tool_calling": true,\n' +
      '        "enabled_features": [\n' +
      '            {\n' +
      '                "description": "Perform a detailed web search.",\n' +
      '                "germanDescription": "Eine detaillierte Websuche durchführen.",\n' +
      '                "id": "web_search",\n' +
      '                "name": "Web Search",\n' +
      '                "germanName": "Websuche",\n' +
      '                "requiredConfigParams": null,\n' +
      '                "tools": [\n' +
      '                    {\n' +
      '                        "id": "web_search",\n' +
      '                        "name": "Deep Research",\n' +
      '                        "germanName": "Deep Research",\n' +
      '                        "description": "Performs a web search.",\n' +
      '                        "germanDescription": "Eine Websuche durchführen."\n' +
      '                    }\n' +
      '                ]\n' +
      '            },\n' +
      '            {\n' +
      '                "description": "Create and Edit images.",\n' +
      '                "germanDescription": "Erstellen und Ändern von Bildern.",\n' +
      '                "id": "image_generation",\n' +
      '                "name": "Image Generation",\n' +
      '                "germanName": "Bilderzeugung",\n' +
      '                "requiredConfigParams": null,\n' +
      '                "tools": [\n' +
      '                    {\n' +
      '                        "id": "create_image",\n' +
      '                        "name": "Create a new image",\n' +
      '                        "germanName": "Ein neues Bild erstellen",\n' +
      '                        "description": "Generates a new image based on a prompt.",\n' +
      '                        "germanDescription": "Erstellt ein neues Bild basierend auf einer Prompt."\n' +
      '                    },\n' +
      '                    {\n' +
      '                        "id": "edit_image",\n' +
      '                        "name": "Edit an existing image",\n' +
      '                        "germanName": "Ein existierendes Bild ändern",\n' +
      '                        "description": "Edits an existing image based on a prompt and an image ID.",\n' +
      '                        "germanDescription": "Bearbeitet ein vorhandenes Bild auf der Grundlage einer Prompt und einer Bild-ID."\n' +
      '                    },\n' +
      '                    {\n' +
      '                        "id": "create_image_from_html",\n' +
      '                        "name": "Html to Image",\n' +
      '                        "germanName": "Html zu Bild",\n' +
      '                        "description": "Generate an Image from an html snippet",\n' +
      '                        "germanDescription": "Html-Code in ein Bild umwandeln"\n' +
      '                    },\n' +
      '                    {\n' +
      '                        "id": "add_response_items",\n' +
      '                        "name": "Citations",\n' +
      '                        "germanName": "Quellenangaben",\n' +
      '                        "description": "Let the agent return pages and images in their response.",\n' +
      '                        "germanDescription": "Bilder und Seiten in der Antwortnachricht anzeigen."\n' +
      '                    }\n' +
      '                ]\n' +
      '            },\n' +
      '            {\n' +
      '                "description": "Perform document actions like summarization, finding information in a document, creating word documents from markdown, fill out pdf forms.",\n' +
      '                "germanDescription": "Aktionen wie Zusammenfassen, Informationen in Dokumenten finden, Erstellen von Dokumenten aus Markdown-Text und Ausfüllen von PDF-Formularen.",\n' +
      '                "id": "document_management",\n' +
      '                "name": "Document Management",\n' +
      '                "germanName": "Dokumentenverwaltung",\n' +
      '                "requiredConfigParams": null,\n' +
      '                "tools": [\n' +
      '                    {\n' +
      '                        "id": "compress_document",\n' +
      '                        "name": "Document Compressor",\n' +
      '                        "germanName": "Dokumentkompressor",\n' +
      '                        "description": "Compress a document into a smaller amount of tokens by extracting key facts.",\n' +
      '                        "germanDescription": "Komprimierung eines Dokuments in eine geringere Anzahl von Token durch Extraktion von Schlüsselfakten."\n' +
      '                    },\n' +
      '                    {\n' +
      '                        "id": "get_document_pages",\n' +
      '                        "name": "Semantic page search",\n' +
      '                        "germanName": "Semantische Seitensuche",\n' +
      '                        "description": "Returns document pages including their metadata and content in the order of their semantic relevancy in regard to the given search query.",\n' +
      '                        "germanDescription": "Liefert Dokumentenseiten einschließlich ihrer Metadaten und Inhalte in der Reihenfolge ihrer semantischen Relevanz für die gegebene Suchanfrage."\n' +
      '                    },\n' +
      '                    {\n' +
      '                        "id": "get_document_pages_sequentially",\n' +
      '                        "name": "Get Document Pages Sequentially",\n' +
      '                        "germanName": "Dokumentenseiten der Reihe nach abrufen",\n' +
      '                        "description": "Get a number of document pages from a given start index ordered by page number.",\n' +
      '                        "germanDescription": "Rückgabe von Dokumentseiten ab einem bestimmten Startindex, geordnet nach Seitenzahl."\n' +
      '                    },\n' +
      '                    {\n' +
      '                        "id": "get_text_clusters",\n' +
      '                        "name": "Text Clustering",\n' +
      '                        "germanName": "Text Clustering",\n' +
      '                        "description": "Get a set of representative Texts for given files or folders.",\n' +
      '                        "germanDescription": "Ermittelt eine Reihe von repräsentativen Texten für mehrere Dateien oder Ordner."\n' +
      '                    },\n' +
      '                    {\n' +
      '                        "id": "create_docx_from_markdown",\n' +
      '                        "name": "Document Creator",\n' +
      '                        "germanName": "Dokumente erstellen",\n' +
      '                        "description": "Create a new document by a given Markdown text and a dictionary containing image placeholders and Images.",\n' +
      '                        "germanDescription": "Ein neues Dokument erzeugen basierend auf einem Markdown-Text und einer Liste von Bild-Platzhaltern."\n' +
      '                    },\n' +
      '                    {\n' +
      '                        "id": "add_response_items",\n' +
      '                        "name": "Citations",\n' +
      '                        "germanName": "Quellenangaben",\n' +
      '                        "description": "Let the agent return pages and images in their response.",\n' +
      '                        "germanDescription": "Bilder und Seiten in der Antwortnachricht anzeigen."\n' +
      '                    },\n' +
      '                    {\n' +
      '                        "id": "fillout_pdf_file",\n' +
      '                        "name": "PDF Filler",\n' +
      '                        "germanName": "PDF-Ausfüllhilfe",\n' +
      '                        "description": "Fill a pdf file with given information.",\n' +
      '                        "germanDescription": "Füllen Sie eine pdf-Datei mit den angegebenen Informationen aus."\n' +
      '                    }\n' +
      '                ]\n' +
      '            }\n' +
      '        ],\n' +
      '        "is_open_source_model": false\n' +
      '    },\n' +
      '    {\n' +
      '        "id": "openai/gpt-4.1",\n' +
      '        "name": "OpenAI GPT 4.1",\n' +
      '        "base_url": "https://api.openai.com/v1",\n' +
      '        "api_key": "",\n' +
      '        "api_version": null,\n' +
      '        "speed": "High",\n' +
      '        "location": "USA",\n' +
      '        "intelligence_level": "Standard",\n' +
      '        "modalities": [\n' +
      '            "Text",\n' +
      '            "Image"\n' +
      '        ],\n' +
      '        "logo": "/static/model-logos/openai.png",\n' +
      '        "supports_tool_calling": true,\n' +
      '        "enabled_features": [\n' +
      '            {\n' +
      '                "description": "Perform a detailed web search.",\n' +
      '                "germanDescription": "Eine detaillierte Websuche durchführen.",\n' +
      '                "id": "web_search",\n' +
      '                "name": "Web Search",\n' +
      '                "germanName": "Websuche",\n' +
      '                "requiredConfigParams": null,\n' +
      '                "tools": [\n' +
      '                    {\n' +
      '                        "id": "web_search",\n' +
      '                        "name": "Deep Research",\n' +
      '                        "germanName": "Deep Research",\n' +
      '                        "description": "Performs a web search.",\n' +
      '                        "germanDescription": "Eine Websuche durchführen."\n' +
      '                    }\n' +
      '                ]\n' +
      '            },\n' +
      '            {\n' +
      '                "description": "Create and Edit images.",\n' +
      '                "germanDescription": "Erstellen und Ändern von Bildern.",\n' +
      '                "id": "image_generation",\n' +
      '                "name": "Image Generation",\n' +
      '                "germanName": "Bilderzeugung",\n' +
      '                "requiredConfigParams": null,\n' +
      '                "tools": [\n' +
      '                    {\n' +
      '                        "id": "create_image",\n' +
      '                        "name": "Create a new image",\n' +
      '                        "germanName": "Ein neues Bild erstellen",\n' +
      '                        "description": "Generates a new image based on a prompt.",\n' +
      '                        "germanDescription": "Erstellt ein neues Bild basierend auf einer Prompt."\n' +
      '                    },\n' +
      '                    {\n' +
      '                        "id": "edit_image",\n' +
      '                        "name": "Edit an existing image",\n' +
      '                        "germanName": "Ein existierendes Bild ändern",\n' +
      '                        "description": "Edits an existing image based on a prompt and an image ID.",\n' +
      '                        "germanDescription": "Bearbeitet ein vorhandenes Bild auf der Grundlage einer Prompt und einer Bild-ID."\n' +
      '                    },\n' +
      '                    {\n' +
      '                        "id": "create_image_from_html",\n' +
      '                        "name": "Html to Image",\n' +
      '                        "germanName": "Html zu Bild",\n' +
      '                        "description": "Generate an Image from an html snippet",\n' +
      '                        "germanDescription": "Html-Code in ein Bild umwandeln"\n' +
      '                    },\n' +
      '                    {\n' +
      '                        "id": "add_response_items",\n' +
      '                        "name": "Citations",\n' +
      '                        "germanName": "Quellenangaben",\n' +
      '                        "description": "Let the agent return pages and images in their response.",\n' +
      '                        "germanDescription": "Bilder und Seiten in der Antwortnachricht anzeigen."\n' +
      '                    }\n' +
      '                ]\n' +
      '            },\n' +
      '            {\n' +
      '                "description": "Perform document actions like summarization, finding information in a document, creating word documents from markdown, fill out pdf forms.",\n' +
      '                "germanDescription": "Aktionen wie Zusammenfassen, Informationen in Dokumenten finden, Erstellen von Dokumenten aus Markdown-Text und Ausfüllen von PDF-Formularen.",\n' +
      '                "id": "document_management",\n' +
      '                "name": "Document Management",\n' +
      '                "germanName": "Dokumentenverwaltung",\n' +
      '                "requiredConfigParams": null,\n' +
      '                "tools": [\n' +
      '                    {\n' +
      '                        "id": "compress_document",\n' +
      '                        "name": "Document Compressor",\n' +
      '                        "germanName": "Dokumentkompressor",\n' +
      '                        "description": "Compress a document into a smaller amount of tokens by extracting key facts.",\n' +
      '                        "germanDescription": "Komprimierung eines Dokuments in eine geringere Anzahl von Token durch Extraktion von Schlüsselfakten."\n' +
      '                    },\n' +
      '                    {\n' +
      '                        "id": "get_document_pages",\n' +
      '                        "name": "Semantic page search",\n' +
      '                        "germanName": "Semantische Seitensuche",\n' +
      '                        "description": "Returns document pages including their metadata and content in the order of their semantic relevancy in regard to the given search query.",\n' +
      '                        "germanDescription": "Liefert Dokumentenseiten einschließlich ihrer Metadaten und Inhalte in der Reihenfolge ihrer semantischen Relevanz für die gegebene Suchanfrage."\n' +
      '                    },\n' +
      '                    {\n' +
      '                        "id": "get_document_pages_sequentially",\n' +
      '                        "name": "Get Document Pages Sequentially",\n' +
      '                        "germanName": "Dokumentenseiten der Reihe nach abrufen",\n' +
      '                        "description": "Get a number of document pages from a given start index ordered by page number.",\n' +
      '                        "germanDescription": "Rückgabe von Dokumentseiten ab einem bestimmten Startindex, geordnet nach Seitenzahl."\n' +
      '                    },\n' +
      '                    {\n' +
      '                        "id": "get_text_clusters",\n' +
      '                        "name": "Text Clustering",\n' +
      '                        "germanName": "Text Clustering",\n' +
      '                        "description": "Get a set of representative Texts for given files or folders.",\n' +
      '                        "germanDescription": "Ermittelt eine Reihe von repräsentativen Texten für mehrere Dateien oder Ordner."\n' +
      '                    },\n' +
      '                    {\n' +
      '                        "id": "create_docx_from_markdown",\n' +
      '                        "name": "Document Creator",\n' +
      '                        "germanName": "Dokumente erstellen",\n' +
      '                        "description": "Create a new document by a given Markdown text and a dictionary containing image placeholders and Images.",\n' +
      '                        "germanDescription": "Ein neues Dokument erzeugen basierend auf einem Markdown-Text und einer Liste von Bild-Platzhaltern."\n' +
      '                    },\n' +
      '                    {\n' +
      '                        "id": "add_response_items",\n' +
      '                        "name": "Citations",\n' +
      '                        "germanName": "Quellenangaben",\n' +
      '                        "description": "Let the agent return pages and images in their response.",\n' +
      '                        "germanDescription": "Bilder und Seiten in der Antwortnachricht anzeigen."\n' +
      '                    },\n' +
      '                    {\n' +
      '                        "id": "fillout_pdf_file",\n' +
      '                        "name": "PDF Filler",\n' +
      '                        "germanName": "PDF-Ausfüllhilfe",\n' +
      '                        "description": "Fill a pdf file with given information.",\n' +
      '                        "germanDescription": "Füllen Sie eine pdf-Datei mit den angegebenen Informationen aus."\n' +
      '                    }\n' +
      '                ]\n' +
      '            }\n' +
      '        ],\n' +
      '        "is_open_source_model": false\n' +
      '    },\n' +
      '    {\n' +
      '        "id": "openai/gpt-4.1-mini",\n' +
      '        "name": "OpenAI GPT 4.1 mini",\n' +
      '        "base_url": "https://api.openai.com/v1",\n' +
      '        "api_key": "",\n' +
      '        "api_version": null,\n' +
      '        "speed": "High",\n' +
      '        "location": "USA",\n' +
      '        "intelligence_level": "Basic",\n' +
      '        "modalities": [\n' +
      '            "Text",\n' +
      '            "Image"\n' +
      '        ],\n' +
      '        "logo": "/static/model-logos/openai.png",\n' +
      '        "supports_tool_calling": true,\n' +
      '        "enabled_features": [\n' +
      '            {\n' +
      '                "description": "Perform a detailed web search.",\n' +
      '                "germanDescription": "Eine detaillierte Websuche durchführen.",\n' +
      '                "id": "web_search",\n' +
      '                "name": "Web Search",\n' +
      '                "germanName": "Websuche",\n' +
      '                "requiredConfigParams": null,\n' +
      '                "tools": [\n' +
      '                    {\n' +
      '                        "id": "web_search",\n' +
      '                        "name": "Deep Research",\n' +
      '                        "germanName": "Deep Research",\n' +
      '                        "description": "Performs a web search.",\n' +
      '                        "germanDescription": "Eine Websuche durchführen."\n' +
      '                    }\n' +
      '                ]\n' +
      '            },\n' +
      '            {\n' +
      '                "description": "Create and Edit images.",\n' +
      '                "germanDescription": "Erstellen und Ändern von Bildern.",\n' +
      '                "id": "image_generation",\n' +
      '                "name": "Image Generation",\n' +
      '                "germanName": "Bilderzeugung",\n' +
      '                "requiredConfigParams": null,\n' +
      '                "tools": [\n' +
      '                    {\n' +
      '                        "id": "create_image",\n' +
      '                        "name": "Create a new image",\n' +
      '                        "germanName": "Ein neues Bild erstellen",\n' +
      '                        "description": "Generates a new image based on a prompt.",\n' +
      '                        "germanDescription": "Erstellt ein neues Bild basierend auf einer Prompt."\n' +
      '                    },\n' +
      '                    {\n' +
      '                        "id": "edit_image",\n' +
      '                        "name": "Edit an existing image",\n' +
      '                        "germanName": "Ein existierendes Bild ändern",\n' +
      '                        "description": "Edits an existing image based on a prompt and an image ID.",\n' +
      '                        "germanDescription": "Bearbeitet ein vorhandenes Bild auf der Grundlage einer Prompt und einer Bild-ID."\n' +
      '                    },\n' +
      '                    {\n' +
      '                        "id": "create_image_from_html",\n' +
      '                        "name": "Html to Image",\n' +
      '                        "germanName": "Html zu Bild",\n' +
      '                        "description": "Generate an Image from an html snippet",\n' +
      '                        "germanDescription": "Html-Code in ein Bild umwandeln"\n' +
      '                    },\n' +
      '                    {\n' +
      '                        "id": "add_response_items",\n' +
      '                        "name": "Citations",\n' +
      '                        "germanName": "Quellenangaben",\n' +
      '                        "description": "Let the agent return pages and images in their response.",\n' +
      '                        "germanDescription": "Bilder und Seiten in der Antwortnachricht anzeigen."\n' +
      '                    }\n' +
      '                ]\n' +
      '            },\n' +
      '            {\n' +
      '                "description": "Perform document actions like summarization, finding information in a document, creating word documents from markdown, fill out pdf forms.",\n' +
      '                "germanDescription": "Aktionen wie Zusammenfassen, Informationen in Dokumenten finden, Erstellen von Dokumenten aus Markdown-Text und Ausfüllen von PDF-Formularen.",\n' +
      '                "id": "document_management",\n' +
      '                "name": "Document Management",\n' +
      '                "germanName": "Dokumentenverwaltung",\n' +
      '                "requiredConfigParams": null,\n' +
      '                "tools": [\n' +
      '                    {\n' +
      '                        "id": "compress_document",\n' +
      '                        "name": "Document Compressor",\n' +
      '                        "germanName": "Dokumentkompressor",\n' +
      '                        "description": "Compress a document into a smaller amount of tokens by extracting key facts.",\n' +
      '                        "germanDescription": "Komprimierung eines Dokuments in eine geringere Anzahl von Token durch Extraktion von Schlüsselfakten."\n' +
      '                    },\n' +
      '                    {\n' +
      '                        "id": "get_document_pages",\n' +
      '                        "name": "Semantic page search",\n' +
      '                        "germanName": "Semantische Seitensuche",\n' +
      '                        "description": "Returns document pages including their metadata and content in the order of their semantic relevancy in regard to the given search query.",\n' +
      '                        "germanDescription": "Liefert Dokumentenseiten einschließlich ihrer Metadaten und Inhalte in der Reihenfolge ihrer semantischen Relevanz für die gegebene Suchanfrage."\n' +
      '                    },\n' +
      '                    {\n' +
      '                        "id": "get_document_pages_sequentially",\n' +
      '                        "name": "Get Document Pages Sequentially",\n' +
      '                        "germanName": "Dokumentenseiten der Reihe nach abrufen",\n' +
      '                        "description": "Get a number of document pages from a given start index ordered by page number.",\n' +
      '                        "germanDescription": "Rückgabe von Dokumentseiten ab einem bestimmten Startindex, geordnet nach Seitenzahl."\n' +
      '                    },\n' +
      '                    {\n' +
      '                        "id": "get_text_clusters",\n' +
      '                        "name": "Text Clustering",\n' +
      '                        "germanName": "Text Clustering",\n' +
      '                        "description": "Get a set of representative Texts for given files or folders.",\n' +
      '                        "germanDescription": "Ermittelt eine Reihe von repräsentativen Texten für mehrere Dateien oder Ordner."\n' +
      '                    },\n' +
      '                    {\n' +
      '                        "id": "create_docx_from_markdown",\n' +
      '                        "name": "Document Creator",\n' +
      '                        "germanName": "Dokumente erstellen",\n' +
      '                        "description": "Create a new document by a given Markdown text and a dictionary containing image placeholders and Images.",\n' +
      '                        "germanDescription": "Ein neues Dokument erzeugen basierend auf einem Markdown-Text und einer Liste von Bild-Platzhaltern."\n' +
      '                    },\n' +
      '                    {\n' +
      '                        "id": "add_response_items",\n' +
      '                        "name": "Citations",\n' +
      '                        "germanName": "Quellenangaben",\n' +
      '                        "description": "Let the agent return pages and images in their response.",\n' +
      '                        "germanDescription": "Bilder und Seiten in der Antwortnachricht anzeigen."\n' +
      '                    },\n' +
      '                    {\n' +
      '                        "id": "fillout_pdf_file",\n' +
      '                        "name": "PDF Filler",\n' +
      '                        "germanName": "PDF-Ausfüllhilfe",\n' +
      '                        "description": "Fill a pdf file with given information.",\n' +
      '                        "germanDescription": "Füllen Sie eine pdf-Datei mit den angegebenen Informationen aus."\n' +
      '                    }\n' +
      '                ]\n' +
      '            }\n' +
      '        ],\n' +
      '        "is_open_source_model": false\n' +
      '    },\n' +
      '    {\n' +
      '        "id": "openai/o4-mini",\n' +
      '        "name": "OpenAI o4 mini",\n' +
      '        "base_url": "https://api.openai.com/v1",\n' +
      '        "api_key": "",\n' +
      '        "api_version": null,\n' +
      '        "speed": "Low",\n' +
      '        "location": "USA",\n' +
      '        "intelligence_level": "High",\n' +
      '        "modalities": [\n' +
      '            "Text",\n' +
      '            "Image"\n' +
      '        ],\n' +
      '        "logo": "/static/model-logos/openai.png",\n' +
      '        "supports_tool_calling": true,\n' +
      '        "enabled_features": [\n' +
      '            {\n' +
      '                "description": "Perform a detailed web search.",\n' +
      '                "germanDescription": "Eine detaillierte Websuche durchführen.",\n' +
      '                "id": "web_search",\n' +
      '                "name": "Web Search",\n' +
      '                "germanName": "Websuche",\n' +
      '                "requiredConfigParams": null,\n' +
      '                "tools": [\n' +
      '                    {\n' +
      '                        "id": "web_search",\n' +
      '                        "name": "Deep Research",\n' +
      '                        "germanName": "Deep Research",\n' +
      '                        "description": "Performs a web search.",\n' +
      '                        "germanDescription": "Eine Websuche durchführen."\n' +
      '                    }\n' +
      '                ]\n' +
      '            },\n' +
      '            {\n' +
      '                "description": "Create and Edit images.",\n' +
      '                "germanDescription": "Erstellen und Ändern von Bildern.",\n' +
      '                "id": "image_generation",\n' +
      '                "name": "Image Generation",\n' +
      '                "germanName": "Bilderzeugung",\n' +
      '                "requiredConfigParams": null,\n' +
      '                "tools": [\n' +
      '                    {\n' +
      '                        "id": "create_image",\n' +
      '                        "name": "Create a new image",\n' +
      '                        "germanName": "Ein neues Bild erstellen",\n' +
      '                        "description": "Generates a new image based on a prompt.",\n' +
      '                        "germanDescription": "Erstellt ein neues Bild basierend auf einer Prompt."\n' +
      '                    },\n' +
      '                    {\n' +
      '                        "id": "edit_image",\n' +
      '                        "name": "Edit an existing image",\n' +
      '                        "germanName": "Ein existierendes Bild ändern",\n' +
      '                        "description": "Edits an existing image based on a prompt and an image ID.",\n' +
      '                        "germanDescription": "Bearbeitet ein vorhandenes Bild auf der Grundlage einer Prompt und einer Bild-ID."\n' +
      '                    },\n' +
      '                    {\n' +
      '                        "id": "create_image_from_html",\n' +
      '                        "name": "Html to Image",\n' +
      '                        "germanName": "Html zu Bild",\n' +
      '                        "description": "Generate an Image from an html snippet",\n' +
      '                        "germanDescription": "Html-Code in ein Bild umwandeln"\n' +
      '                    },\n' +
      '                    {\n' +
      '                        "id": "add_response_items",\n' +
      '                        "name": "Citations",\n' +
      '                        "germanName": "Quellenangaben",\n' +
      '                        "description": "Let the agent return pages and images in their response.",\n' +
      '                        "germanDescription": "Bilder und Seiten in der Antwortnachricht anzeigen."\n' +
      '                    }\n' +
      '                ]\n' +
      '            },\n' +
      '            {\n' +
      '                "description": "Perform document actions like summarization, finding information in a document, creating word documents from markdown, fill out pdf forms.",\n' +
      '                "germanDescription": "Aktionen wie Zusammenfassen, Informationen in Dokumenten finden, Erstellen von Dokumenten aus Markdown-Text und Ausfüllen von PDF-Formularen.",\n' +
      '                "id": "document_management",\n' +
      '                "name": "Document Management",\n' +
      '                "germanName": "Dokumentenverwaltung",\n' +
      '                "requiredConfigParams": null,\n' +
      '                "tools": [\n' +
      '                    {\n' +
      '                        "id": "compress_document",\n' +
      '                        "name": "Document Compressor",\n' +
      '                        "germanName": "Dokumentkompressor",\n' +
      '                        "description": "Compress a document into a smaller amount of tokens by extracting key facts.",\n' +
      '                        "germanDescription": "Komprimierung eines Dokuments in eine geringere Anzahl von Token durch Extraktion von Schlüsselfakten."\n' +
      '                    },\n' +
      '                    {\n' +
      '                        "id": "get_document_pages",\n' +
      '                        "name": "Semantic page search",\n' +
      '                        "germanName": "Semantische Seitensuche",\n' +
      '                        "description": "Returns document pages including their metadata and content in the order of their semantic relevancy in regard to the given search query.",\n' +
      '                        "germanDescription": "Liefert Dokumentenseiten einschließlich ihrer Metadaten und Inhalte in der Reihenfolge ihrer semantischen Relevanz für die gegebene Suchanfrage."\n' +
      '                    },\n' +
      '                    {\n' +
      '                        "id": "get_document_pages_sequentially",\n' +
      '                        "name": "Get Document Pages Sequentially",\n' +
      '                        "germanName": "Dokumentenseiten der Reihe nach abrufen",\n' +
      '                        "description": "Get a number of document pages from a given start index ordered by page number.",\n' +
      '                        "germanDescription": "Rückgabe von Dokumentseiten ab einem bestimmten Startindex, geordnet nach Seitenzahl."\n' +
      '                    },\n' +
      '                    {\n' +
      '                        "id": "get_text_clusters",\n' +
      '                        "name": "Text Clustering",\n' +
      '                        "germanName": "Text Clustering",\n' +
      '                        "description": "Get a set of representative Texts for given files or folders.",\n' +
      '                        "germanDescription": "Ermittelt eine Reihe von repräsentativen Texten für mehrere Dateien oder Ordner."\n' +
      '                    },\n' +
      '                    {\n' +
      '                        "id": "create_docx_from_markdown",\n' +
      '                        "name": "Document Creator",\n' +
      '                        "germanName": "Dokumente erstellen",\n' +
      '                        "description": "Create a new document by a given Markdown text and a dictionary containing image placeholders and Images.",\n' +
      '                        "germanDescription": "Ein neues Dokument erzeugen basierend auf einem Markdown-Text und einer Liste von Bild-Platzhaltern."\n' +
      '                    },\n' +
      '                    {\n' +
      '                        "id": "add_response_items",\n' +
      '                        "name": "Citations",\n' +
      '                        "germanName": "Quellenangaben",\n' +
      '                        "description": "Let the agent return pages and images in their response.",\n' +
      '                        "germanDescription": "Bilder und Seiten in der Antwortnachricht anzeigen."\n' +
      '                    },\n' +
      '                    {\n' +
      '                        "id": "fillout_pdf_file",\n' +
      '                        "name": "PDF Filler",\n' +
      '                        "germanName": "PDF-Ausfüllhilfe",\n' +
      '                        "description": "Fill a pdf file with given information.",\n' +
      '                        "germanDescription": "Füllen Sie eine pdf-Datei mit den angegebenen Informationen aus."\n' +
      '                    }\n' +
      '                ]\n' +
      '            }\n' +
      '        ],\n' +
      '        "is_open_source_model": false\n' +
      '    },\n' +
      '    {\n' +
      '        "id": "openai/o3",\n' +
      '        "name": "OpenAI o3",\n' +
      '        "base_url": "https://api.openai.com/v1",\n' +
      '        "api_key": "",\n' +
      '        "api_version": null,\n' +
      '        "speed": "Low",\n' +
      '        "location": "USA",\n' +
      '        "intelligence_level": "High",\n' +
      '        "modalities": [\n' +
      '            "Text",\n' +
      '            "Image"\n' +
      '        ],\n' +
      '        "logo": "/static/model-logos/openai.png",\n' +
      '        "supports_tool_calling": true,\n' +
      '        "enabled_features": [\n' +
      '            {\n' +
      '                "description": "Perform a detailed web search.",\n' +
      '                "germanDescription": "Eine detaillierte Websuche durchführen.",\n' +
      '                "id": "web_search",\n' +
      '                "name": "Web Search",\n' +
      '                "germanName": "Websuche",\n' +
      '                "requiredConfigParams": null,\n' +
      '                "tools": [\n' +
      '                    {\n' +
      '                        "id": "web_search",\n' +
      '                        "name": "Deep Research",\n' +
      '                        "germanName": "Deep Research",\n' +
      '                        "description": "Performs a web search.",\n' +
      '                        "germanDescription": "Eine Websuche durchführen."\n' +
      '                    }\n' +
      '                ]\n' +
      '            },\n' +
      '            {\n' +
      '                "description": "Create and Edit images.",\n' +
      '                "germanDescription": "Erstellen und Ändern von Bildern.",\n' +
      '                "id": "image_generation",\n' +
      '                "name": "Image Generation",\n' +
      '                "germanName": "Bilderzeugung",\n' +
      '                "requiredConfigParams": null,\n' +
      '                "tools": [\n' +
      '                    {\n' +
      '                        "id": "create_image",\n' +
      '                        "name": "Create a new image",\n' +
      '                        "germanName": "Ein neues Bild erstellen",\n' +
      '                        "description": "Generates a new image based on a prompt.",\n' +
      '                        "germanDescription": "Erstellt ein neues Bild basierend auf einer Prompt."\n' +
      '                    },\n' +
      '                    {\n' +
      '                        "id": "edit_image",\n' +
      '                        "name": "Edit an existing image",\n' +
      '                        "germanName": "Ein existierendes Bild ändern",\n' +
      '                        "description": "Edits an existing image based on a prompt and an image ID.",\n' +
      '                        "germanDescription": "Bearbeitet ein vorhandenes Bild auf der Grundlage einer Prompt und einer Bild-ID."\n' +
      '                    },\n' +
      '                    {\n' +
      '                        "id": "create_image_from_html",\n' +
      '                        "name": "Html to Image",\n' +
      '                        "germanName": "Html zu Bild",\n' +
      '                        "description": "Generate an Image from an html snippet",\n' +
      '                        "germanDescription": "Html-Code in ein Bild umwandeln"\n' +
      '                    },\n' +
      '                    {\n' +
      '                        "id": "add_response_items",\n' +
      '                        "name": "Citations",\n' +
      '                        "germanName": "Quellenangaben",\n' +
      '                        "description": "Let the agent return pages and images in their response.",\n' +
      '                        "germanDescription": "Bilder und Seiten in der Antwortnachricht anzeigen."\n' +
      '                    }\n' +
      '                ]\n' +
      '            },\n' +
      '            {\n' +
      '                "description": "Perform document actions like summarization, finding information in a document, creating word documents from markdown, fill out pdf forms.",\n' +
      '                "germanDescription": "Aktionen wie Zusammenfassen, Informationen in Dokumenten finden, Erstellen von Dokumenten aus Markdown-Text und Ausfüllen von PDF-Formularen.",\n' +
      '                "id": "document_management",\n' +
      '                "name": "Document Management",\n' +
      '                "germanName": "Dokumentenverwaltung",\n' +
      '                "requiredConfigParams": null,\n' +
      '                "tools": [\n' +
      '                    {\n' +
      '                        "id": "compress_document",\n' +
      '                        "name": "Document Compressor",\n' +
      '                        "germanName": "Dokumentkompressor",\n' +
      '                        "description": "Compress a document into a smaller amount of tokens by extracting key facts.",\n' +
      '                        "germanDescription": "Komprimierung eines Dokuments in eine geringere Anzahl von Token durch Extraktion von Schlüsselfakten."\n' +
      '                    },\n' +
      '                    {\n' +
      '                        "id": "get_document_pages",\n' +
      '                        "name": "Semantic page search",\n' +
      '                        "germanName": "Semantische Seitensuche",\n' +
      '                        "description": "Returns document pages including their metadata and content in the order of their semantic relevancy in regard to the given search query.",\n' +
      '                        "germanDescription": "Liefert Dokumentenseiten einschließlich ihrer Metadaten und Inhalte in der Reihenfolge ihrer semantischen Relevanz für die gegebene Suchanfrage."\n' +
      '                    },\n' +
      '                    {\n' +
      '                        "id": "get_document_pages_sequentially",\n' +
      '                        "name": "Get Document Pages Sequentially",\n' +
      '                        "germanName": "Dokumentenseiten der Reihe nach abrufen",\n' +
      '                        "description": "Get a number of document pages from a given start index ordered by page number.",\n' +
      '                        "germanDescription": "Rückgabe von Dokumentseiten ab einem bestimmten Startindex, geordnet nach Seitenzahl."\n' +
      '                    },\n' +
      '                    {\n' +
      '                        "id": "get_text_clusters",\n' +
      '                        "name": "Text Clustering",\n' +
      '                        "germanName": "Text Clustering",\n' +
      '                        "description": "Get a set of representative Texts for given files or folders.",\n' +
      '                        "germanDescription": "Ermittelt eine Reihe von repräsentativen Texten für mehrere Dateien oder Ordner."\n' +
      '                    },\n' +
      '                    {\n' +
      '                        "id": "create_docx_from_markdown",\n' +
      '                        "name": "Document Creator",\n' +
      '                        "germanName": "Dokumente erstellen",\n' +
      '                        "description": "Create a new document by a given Markdown text and a dictionary containing image placeholders and Images.",\n' +
      '                        "germanDescription": "Ein neues Dokument erzeugen basierend auf einem Markdown-Text und einer Liste von Bild-Platzhaltern."\n' +
      '                    },\n' +
      '                    {\n' +
      '                        "id": "add_response_items",\n' +
      '                        "name": "Citations",\n' +
      '                        "germanName": "Quellenangaben",\n' +
      '                        "description": "Let the agent return pages and images in their response.",\n' +
      '                        "germanDescription": "Bilder und Seiten in der Antwortnachricht anzeigen."\n' +
      '                    },\n' +
      '                    {\n' +
      '                        "id": "fillout_pdf_file",\n' +
      '                        "name": "PDF Filler",\n' +
      '                        "germanName": "PDF-Ausfüllhilfe",\n' +
      '                        "description": "Fill a pdf file with given information.",\n' +
      '                        "germanDescription": "Füllen Sie eine pdf-Datei mit den angegebenen Informationen aus."\n' +
      '                    }\n' +
      '                ]\n' +
      '            }\n' +
      '        ],\n' +
      '        "is_open_source_model": false\n' +
      '    },\n' +
      '    {\n' +
      '        "id": "openai/gemini-2.5-pro",\n' +
      '        "name": "Google Gemini 2.5 Pro",\n' +
      '        "base_url": "https://generativelanguage.googleapis.com/v1beta/openai",\n' +
      '        "api_key": "",\n' +
      '        "api_version": null,\n' +
      '        "speed": "Low",\n' +
      '        "location": "USA",\n' +
      '        "intelligence_level": "High",\n' +
      '        "modalities": [\n' +
      '            "Text",\n' +
      '            "Image"\n' +
      '        ],\n' +
      '        "logo": "/static/model-logos/gemini.png",\n' +
      '        "supports_tool_calling": false,\n' +
      '        "enabled_features": [],\n' +
      '        "is_open_source_model": false\n' +
      '    },\n' +
      '    {\n' +
      '        "id": "gemini/gemini-2.5-flash",\n' +
      '        "name": "Google Gemini 2.5 Flash",\n' +
      '        "base_url": null,\n' +
      '        "api_key": "",\n' +
      '        "api_version": null,\n' +
      '        "speed": "Low",\n' +
      '        "location": "USA",\n' +
      '        "intelligence_level": "Advanced",\n' +
      '        "modalities": [\n' +
      '            "Text",\n' +
      '            "Image"\n' +
      '        ],\n' +
      '        "logo": "/static/model-logos/gemini.png",\n' +
      '        "supports_tool_calling": false,\n' +
      '        "enabled_features": [],\n' +
      '        "is_open_source_model": false\n' +
      '    },\n' +
      '    {\n' +
      '        "id": "azure/DeepSeek-R1-0528",\n' +
      '        "name": "DeepSeek R1 0528 671B",\n' +
      '        "base_url": "https://ai-iitsaihub346412380665.services.ai.azure.com",\n' +
      '        "api_key": "",\n' +
      '        "api_version": "2024-05-01-preview",\n' +
      '        "speed": "Low",\n' +
      '        "location": "USA",\n' +
      '        "intelligence_level": "High",\n' +
      '        "modalities": [\n' +
      '            "Text"\n' +
      '        ],\n' +
      '        "logo": "/static/model-logos/deepseek.png",\n' +
      '        "supports_tool_calling": false,\n' +
      '        "enabled_features": [],\n' +
      '        "is_open_source_model": true\n' +
      '    },\n' +
      '    {\n' +
      '        "id": "openai/DeepSeek-V3-0324",\n' +
      '        "name": "DeepSeek V3.1 671B",\n' +
      '        "base_url": "https://DeepSeek-V3-0324-khbuv.eastus.models.ai.azure.com",\n' +
      '        "api_key": "",\n' +
      '        "api_version": null,\n' +
      '        "speed": "Medium",\n' +
      '        "location": "USA",\n' +
      '        "intelligence_level": "Standard",\n' +
      '        "modalities": [\n' +
      '            "Text",\n' +
      '            "Image"\n' +
      '        ],\n' +
      '        "logo": "/static/model-logos/deepseek.png",\n' +
      '        "supports_tool_calling": false,\n' +
      '        "enabled_features": [],\n' +
      '        "is_open_source_model": true\n' +
      '    }\n' +
      ']'

    const res = JSON.parse(response);


    return res.map((model: any) => ({
      name: model.id,
      label: model.id,
      provider: this.name,
      maxTokenAllowed: 8000,
    }));
  }

  getModelInstance(options: {
    model: string;
    serverEnv: Env;
    apiKeys?: Record<string, string>;
    providerSettings?: Record<string, IProviderSetting>;
  }): LanguageModelV1 {
    const { model, serverEnv, apiKeys, providerSettings } = options;

    const { baseUrl, apiKey } = this.getProviderBaseUrlAndKey({
      apiKeys,
      providerSettings: providerSettings?.[this.name],
      serverEnv: serverEnv as any,
      defaultBaseUrlKey: 'OPENAI_LIKE_API_BASE_URL',
      defaultApiTokenKey: 'OPENAI_LIKE_API_KEY',
    });

    if (!baseUrl || !apiKey) {
      throw new Error(`Missing configuration for ${this.name} provider`);
    }

    return getOpenAILikeModel(baseUrl, apiKey, model);
  }
}
