OC.L10N.register(
    "ocr",
    {
    "Saved." : "Сохранено.",
    "Saving languages failed:" : "Сбой при сохранении языков:",
    "The languages are not specified in the correct format." : "Языки указаны в неверном формате.",
    "Saving Redis settings failed:" : "Сбой при сохранении настроек Redis:",
    "The Redis settings are not specified in the right format." : "Настройки Redis указаны в неверном формате.",
    "OCR" : "ОРС",
    "OCR processing failed:" : "Сбой при обработке ОРС:",
    "No file selected." : "Ни одного файла не выбрано.",
    "MIME type not supported." : "Тип MIME не поддерживается.",
    "_OCR processing for %n file failed. For details please go to your personal settings._::_OCR processing for %n files failed. For details please go to your personal settings._" : ["Обработка ОРС закончилась неудачей для %n файлов. Для получения подробностей, свяжитесь с вашим администратором.","Обработка ОРС закончилась неудачей для %n файлов. Для получения подробностей, свяжитесь с вашим администратором.","Обработка ОРС закончилась неудачей для %n файлов. Для получения подробностей, свяжитесь с вашим администратором.","Обработка ОРС закончилась неудачей для %n файлов. Для получения подробностей, свяжитесь с вашим администратором."],
    "OCR status could not be retrieved:" : "Не удаётся получить состояние ОРС :",
    "No languages available for OCR processing. Please make sure to configure the languages in the administration section." : "Не найдены языки для обработки ОРС. Проверьте настройку языков в разделе «Администрирование».",
    "Available languages could not be retrieved:" : "Не удаётся получить список доступных языков распознавания:",
    "Process" : "Обработка",
    "Replace" : "Заменить",
    "_OCR started: %n new file in queue._::_OCR started: %n new files in queue._" : ["ОРС запущено: в очереди %n новый файл.","ОРС запущено: в очереди %n новых файлов.","ОРС запущено: в очереди %n новых файлов.","ОРС запущено: в очереди %n новых файлов."],
    "_OCR: %n currently pending file in queue._::_OCR: %n currently pending files in queue._" : ["ОРС: в очереди ожидает %n файл.","ОРС: в очереди ожидает %n файлов.","ОРС: в очереди ожидает %n файлов.","ОРС: в очереди ожидает %n файлов."],
    "No matches found." : "Соответствий не найдено",
    "Select language" : "Выбрать язык",
    "OCR jobs could not be retrieved:" : "Не удаётся получить список заданий ОРС:",
    "The job for the following file object has been successfully deleted:" : "Задание для указного файлового объекта было успешно удалено:",
    "Error during deletion:" : "Ошибка удаления:",
    "Delete" : "Удалить",
    "No pending or failed OCR items found." : "Нет находящихся в очереди или с завершившейся  ошибкой обработкой элементов для ОРС.",
    "Refresh" : "Обновить",
    "Delete from queue" : "Удалить из очереди",
    "File" : "Файл",
    "Status" : "Статус",
    "Log" : "Журнал",
    "Replace by result" : "Заменить результатом",
    "Saved" : "Сохранено",
    "Please setup Redis in the administration settings first." : "Для начала настройте Redis в административных настройках, пожалуйста.",
    "The given settings key is empty." : "Указан пустой ключ настроек.",
    "The Redis host is not specified in the correct format." : "Узел Redis указан в неверном формате.",
    "The Redis port number is not specified in the correct format." : "Порт Redis указан в неверном формате",
    "The Redis DB is not specified in the correct format." : "База Redis не указана или указана не корректно.",
    "Wrong parameter." : "Неверный параметр.",
    "Wrong MIME type." : "Неверный тип MIME. ",
    "Cannot replace shared files." : "Не удалось заменить общие файлы.",
    "Empty parameters passed." : "Переданы пустые параметры.",
    "Cannot delete because of wrong owner." : "Невозможно удалить, неверный владелец.",
    "Cannot delete because of wrong ID." : "Невозможно удалить, неверный ID.",
    "Reading the finished jobs from Redis went wrong." : "Что-то пошло не так при чтении завершённых задний Redis.",
    "Temp file does not exist." : "Временный файл не существует.",
    "OCR could not put processed file to the right target folder. If you selected the replace option, you can restore the file by using the trash bin." : "Не удалось поместить обрабатываемый файл в верную целевую папку. При выборе варианта «заменить», будет возможно восстановить файл из корзины.",
    "Could not add files to the Redis OCR processing queue." : "Не удаётся добавить файлы в очередь обработки ОРС.",
    "Temp file cannot be created." : "Невозможно создать временный файл.",
    "Cannot delete temporary file during creation of temp file for Tesseract." : "Невозможно удалить созданный для Tesseract временный файл.",
    "Cannot create temporary file for Tesseract." : "Невозможно создать временный файл для Tesseract.",
    "Cannot set permissions for temporary Tesseract file." : "Невозможно задать права доступа к созданному для Tesseract временному файлу",
    "Message queueing capabilities are missing on the server (package php-redis)." : "Для возможности очереди сообщений установите пакет 'php-redis' на сервер.",
    "Cannot connect to Redis." : "Невозможно подключиться к Redis",
    "Redis authentication error." : "Ошибка при аутентификации Redis.",
    "Cannot connect to the right Redis database." : "Невозможно подключиться к верной базе данных Redis",
    "Optical character recognition" : "Оптическое распознавание символов",
    "Text recognition for your images and pdf files" : "Распознавание текста для ваших изображений и файлов PDF",
    "# Description\n\nNextcloud OCR (optical character recognition) processing for images and PDF with tesseract-ocr and OCRmyPDF brings OCR capability to your Nextcloud.\nThe app uses a docker container with tesseract-ocr, OCRmyPDF and communicates over redis in order to process images (png, jpeg, tiff) and PDF asynchronously and save the output file to the source folder in nextcloud. That for example enables you to search in it. (Hint: currently not all PDF-types are supported, for more information see [here](https://github.com/jbarlow83/OCRmyPDF))\n\n## Prerequisites, Requirements and Dependencies\nThe OCR app has some prerequisites:\n - **[Nextcloud 12 or 13](https://nextcloud.com/)**. For older versions take an older major version of this app.\n - **Linux** server as environment. (tested with Debian 8, Raspbian and Ubuntu 14.04 (Trusty))\n - **Docker** is used for processing files. tesseract-ocr and OCRmyPDF reside in a docker container.\n - **php-redis** is used for the communication and has to be a part of your php.\n\n## Limitations\nCurrently the app is not working with any activated encryption, nor is it working with files shared via external storage or federated sharing. This has to be considered. If one wants to process such a file, it must be copied to the local environment.\n\nFor further information see the [homepage](https://github.com/janis91/ocr/wiki/Usage) or the appropriate documentation in the wiki.\n\n## Installation\nInstall the app from the [Nextcloud AppStore](http://apps.nextcloud.com) or download the release package from github (**NOT** the sources) and place the content in **nextcloud/apps/ocr/**.\n\n**Please consider: The app will not work as long as the Docker container isn't running. (more information in the [wiki](https://github.com/janis91/ocr/wiki))**\n\n## Administration and Usage\nPlease read the related topics in the [wiki](https://github.com/janis91/ocr/wiki).\n\n## Disclaimer\nThe software is distributed on an \"AS IS\" BASIS, WITHOUT WARRANTIES OR\nCONDITIONS OF ANY KIND, either express or implied." : "# Описание\n\nNexrcloud OCR (оптическое распознавание символов) для изображений и PDF с помощью tesseract-ocr и OCRmyPDF предоставляет возможности OCR для вашего Nextcloud.\nПриложение использует контейнеры Docker с tesseract-ocr, OCRmyPDF и обменивается сообщениями через redis, чтобы обрабатывать изображения (png, jpeg, tiff) и PDF асинхронно и сохранять выходной файл в исходную папку в nextcloud. Это, например, позволяет вам искать в нем. (Подсказка: в настоящее время поддерживаются не все типы PDF, для получения дополнительной информации см. [Здесь] (https://github.com/jbarlow83/OCRmyPDF))\n\n## Предпосылки, требования и зависимости\nПриложение OCR имеет некоторые предварительные условия:\n- ** [Nextcloud 12 или 13] (https://nextcloud.com/) **. Для более старых версий используйте более старую версию этого приложения.\n- ** Linux ** сервер как среда. (протестировано с Debian 8, Raspbian и Ubuntu 14.04 (Trusty))\n- ** Docker ** используется для обработки файлов. tesseract-ocr и OCRmyPDF находятся в контейнере Docker.\n- ** php-redis ** используется для связи и должен быть частью вашего php сервера.\n\n## Ограничения\nВ настоящее время приложение не работает с каким-либо активированным шифрованием, равно как и не работает с файлами, совместно используемыми внешним или объединенным хранилищем. Это нужно учитывать. Если вы хотите обработать такой файл, его необходимо скопировать в локальную среду.\n\nДополнительную информацию см. на [домашней странице] (https://github.com/janis91/ocr/wiki/Usage) или соответствующей документации в вики.\n\n## Установка\nУстановите приложение из [Nextcloud AppStore] (http://apps.nextcloud.com) или загрузите релиз пакет из github (** НЕТ ** источников) и поместите его содержимое в ** nextcloud / apps / ocr / * *.\n\n** Обратите внимание: приложение не будет работать, пока контейнер Docker не будет запущен. (дополнительная информация в [wiki] (https://github.com/janis91/ocr/wiki)) **\n\n## Администрирование и использование\nПожалуйста, прочитайте связанные темы в [wiki] (https://github.com/janis91/ocr/wiki).\n\n## Отказ от ответственности\nПрограммное обеспечение распространяется на основе «AS IS»(КАК ЕСТЬ), БЕЗ КАКИХ-ЛИБО ГАРАНТИЙ ИЛИ\nУСЛОВИЙ ЛЮБОГО ВИДА, явных или подразумеваемых.",
    "Installed languages" : "Установленные языки",
    "Here goes a semicolon separated list of languages that are supported by the Docker worker instance (more details in the wiki on GitHub)." : "Здесь приведён разделённый точкой с запятой список языков, поддерживаемых установленным экземпляром Docker (более подробная информация в wiki на github).",
    "Apply" : "Применить",
    "Redis host" : "Узел Redis",
    "The host of the Redis instance for communication with the OCR worker." : "Узел службы Redis для соединения с обработчиком ОРС.",
    "Redis port" : "Порт Redis",
    "The corresponding port (normally 6379)." : "Соответствующий порт (обычно 6379).",
    "Redis database" : "База данных Redis",
    "The Redis database (normally 0)." : "База данных Redis (обычно 0).",
    "Redis password" : "Пароль Redis",
    "The password to authenticate (normally OCR)." : "Пароль для аутентификации (обычно OCR)"
},
"nplurals=4; plural=(n%10==1 && n%100!=11 ? 0 : n%10>=2 && n%10<=4 && (n%100<12 || n%100>14) ? 1 : n%10==0 || (n%10>=5 && n%10<=9) || (n%100>=11 && n%100<=14)? 2 : 3);");
