# Проектная работа Mesto

Ссылка на деплой GitHub Pages: https://m9ut.github.io/mesto-project-ff/

Ссылка на репозиторий Github проекта: git@github.com:m9ut/mesto-project-ff

Ссылка на макет проекта: https://www.figma.com/design/bjyvbKKJN2naO0ucURl2Z0/JavaScript.-Sprint-5?node-id=0-1&node-type=canvas

В ходе этой проектной работы я:
разрабол валидацию всех форм;
подключил интерфейс к API;
опубликовал получившийся сайт на сервере.

Валидация форм
1. Валидация формы «Редактировать профиль»

Валидируйте форму «Редактировать профиль». 

Если поле формы «Редактировать профиль» не прошло валидацию, под ним должен появиться красный текст ошибки.

Настройки валидации такие:
- Оба поля обязательные.
- В поле «Имя» должно быть от 2 до 40 символов.
- В поле «О себе» должно быть от 2 до 200 символов.
- Оба поля могут содержать только латинские и кириллические буквы, знаки дефиса и пробелы. Это нужно проверить с помощью регулярных выражений и вывести кастомное сообщение об ошибке.

Во всех остальных случаях используйте стандартные браузерные тексты ошибок.

Если хотя бы одно из полей не прошло валидацию, кнопка «Сохранить» должна быть неактивной. Если оба поля прошли — активной. Цвета неактивных кнопок возьмите из макета.

Важно: при открытии модального окна редактирования профиля в поля формы подставляются валидные данные пользователя. Если открыть модальное окно редактирования профиля, ввести невалидные данные в поля ввода и закрыть окно, то при повторном открытии и заполнении данных формы профиля необходимо вызвать очистку ошибок валидации, которые могли остаться с прошлого открытия. 

2. Валидация формы «Новое место»

- Валидируйте форму добавления места. Задание аналогично предыдущему, но есть отличия:

- Не нужна проверка длины текста у поля ссылки.
Нужна проверка того, что пользователь ввёл именно ссылку.

Настройки валидации такие:
Оба поля обязательные.

- В поле «Название» должно быть от 2 до 30 символов.
- В поле «Ссылка на картинку» должен быть URL.
- Поле «Название» может содержать латинские и кириллические буквы, знаки дефиса и пробелы. Нужно проверить с помощью регулярных выражений и вывести кастомное сообщение об ошибке.

И снова используйте стандартные браузерные тексты ошибок, кроме проверки регулярным выражением.

Если хотя бы одно из полей не прошло валидацию, кнопка «Сохранить» должна быть неактивной. Если оба поля прошли — активной. Цвета неактивных кнопок те же.

Важно: после добавления карточки на страницу форма очищается, при повторном открытии модального окна поля формы должны быть пустыми. Поэтому при очистке формы добавления карточки нужно вызвать задание неактивного состояния кнопке отправки, чтобы она не оставалась активной при повторном открытии модального окна с пустыми полями ввода. 

3. Требования к коду валидации

Разбейте код валидации на функции. Сделайте функцию enableValidation ответственной за включение валидации всех форм. Пусть она принимает все нужные функциям классы и селекторы элементов как объект настроек. Все необходимое про объекты вы узнали ещё в предыдущем спринте.

В случае, если в поля «Имя» или «Название» введён любой символ, кроме латинской буквы, кириллической буквы и дефиса, вывести кастомное сообщение об ошибке: "Разрешены только латинские, кириллические буквы, знаки дефиса и пробелы". Текст ошибки разместить в data-* атрибуте поля ввода.

Создайте функцию clearValidation, которая очищает ошибки валидации формы и делает кнопку неактивной. Эта функция должна принимать как параметры DOM-элемент формы, для которой очищаются ошибки валидации и объект с настройками валидации. Используйте функцию clearValidation при заполнении формы профиля во время её открытия и при очистке формы добавления карточки.

Вынесите функциональность валидации форм в файл validation.js. Чтобы было чуточку понятнее — пример выше, вызов функций enableValidation и clearValidation должен находиться в файле index.js. А все другие функции, включая декларирование функции enableValidation и валидации форм, — в отдельном файле validation.js.

Интеграция с API

После реализации валидации, вам предстоит подключить проект Mesto к серверу.

1. Перед стартом. Необходимая информация
Для выполнения этого задания вам понадобится дополнительная информация — личный токен и идентификатор вашей группы:

2. Перед стартом. Как сделать запрос к серверу

Адрес сервера проекта Mesto: https://mesto.nomoreparties.co.

3. Загрузка информации о пользователе с сервера

Информация о пользователе должна подгружаться с сервера. Чтобы осуществить это, сделайте GET-запрос на URL. 

Используйте свойства name, about и avatar в соответствующих элементах шапки страницы. Свойство _id — идентификатор пользователя, в данном случае вашего.

4. Загрузка карточек с сервера

Начальные карточки должны подгружаться с сервера. Для этого сделайте GET-запрос:

В ответ придёт JSON с массивом карточек, которые загрузили студенты вашей группы:

Используйте этот массив при отображении предзагруженных карточек, а от предыдущего способа отображения первоначальных карточек избавьтесь.

У каждой карточки есть свойства name и link — это заголовок и ссылка на картинку — они понадобятся при отображении каждой отдельной карточки.

Как видите, у карточки также есть идентификатор — свойство _id. Сейчас он вам не нужен, но скоро понадобится.

Обратите внимание, что для правильного отображения состояния кнопок лайка и удаления карточек необходимо знать _id пользователя. Его мы получаем только в ответе на запрос данных пользователя, и отображать карточки на странице следует только после его получения. Поэтому для загрузки данных пользователя и карточек необходимо воспользоваться методом Promise.all(). В него передается массив промисов, которые должны быть выполнены, т.е. наши запросы, а в блок .then мы попадем когда оба запроса будут выполнены. Тем самым это гарантирует, что у нас будет сразу и массив карточек и _id пользователя для их отображения.

5. Редактирование профиля

Отредактированные данные профиля должны сохраняться на сервере. Для этого отправьте запрос методом PATCH:

В заголовках запроса, кроме токена, необходимо отправить Content-Type, а в теле — JSON с двумя свойствами — name и about. Значениями этих свойств должны быть обновлённые данные пользователя. Вот пример такого запроса:

Если обновление прошло успешно, в теле ответа от сервера вы получите обновлённые данные пользователя:

Метод PATCH обычно используют для обновления сущностей, уже существующих на сервере. Обновление информации о пользователе — именно такой случай: пользователь уже есть, нужно просто обновить его данные.

6. Добавление новой карточки

Чтобы добавить на сервер новую карточку, отправьте POST-запрос:

В заголовках запроса, кроме токена, необходимо отправить Content-Type, а в теле — JSON с двумя свойствами — name и link. В name должно быть название создаваемой карточки, а в link — ссылка на картинку. Если запрос прошёл успешно, сервер вернёт ответ с объектом новой карточки:

7. Отображение количества лайков карточки

У каждой карточки есть свойство likes — оно содержит массив пользователей, лайкнувших карточку:

Сделайте так, чтобы на каждой карточке было написано, сколько у неё лайков:

8. Удаление карточки
Прежде чем браться за работу с API, исправьте элемент карточки. Сделайте так, чтобы иконка удаления была только на созданных вами карточках, так как удалять чужие карточки нельзя.

Если карточка создана не вами, на ней нет иконки корзины

После этого реализуйте функциональность удаления карточки. Карточка должна удаляться, если в попапе удаления карточки пользователь нажал «Да».

Чтобы удалить карточку, отправьте DELETE-запрос:

Вместо cardId в URL нужно подставить параметр _id карточки, которую нужно удалить. _id каждой карточки есть в её JSON:

9. Постановка и снятие лайка

Чтобы лайкнуть карточку, отправьте PUT-запрос:

Чтобы убрать лайк, нужно отправить DELETE-запрос с тем же URL:

Вместо cardId в URL нужно подставить свойство _id соответствующей карточки.

В ответе придёт обновлённый JSON с карточкой. Массив лайков в нём будет уже обновлён.

При постановке и снятии лайка сердечко должно менять цвет, а счётчик лайков увеличиваться или уменьшаться.

Чтобы изменить количество лайков, нужно отправить на сервер запрос с соответствующим методом. Рекомендуем брать количество лайков из ответа сервера, а не из вёрстки. Иначе могут возникнуть ошибки, когда два пользователя одновременно лайкнут одну карточку.

10. Обновление аватара пользователя

Чтобы сменить аватар, отправьте такой PATCH-запрос:

В теле запроса передайте JSON с единственным свойством — avatar. Это свойство должно хранить ссылку на новый аватар. Если отправить не ссылку, сервер вернёт ошибку.

При наведении указателя мыши на аватар, на нём должна появляться иконка редактирования:

10. Обновление аватара пользователя

Чтобы сменить аватар, отправьте такой PATCH-запрос:

В теле запроса передайте JSON с единственным свойством — avatar. Это свойство должно хранить ссылку на новый аватар. Если отправить не ссылку, сервер вернёт ошибку.

При наведении указателя мыши на аватар, на нём должна появляться 
иконка редактирования:

А при клике — открываться форма. Эту форму нужно сделать. В ней должно быть одно поле — ссылка на новый аватар:

Иконка редактирования аватара и форма загрузки есть в Figma.

Хоть в этой форме и всего одно поле, но его тоже необходимо валидировать:

- Поле обязательное
- Поле содержит именно URL в корректном формате

Опционально, если хотите потренироваться, можете проверить, что это именно URL на изображение, и он действительный. Для этого вам потребуется сделать запрос с методом HEAD по этому адресу и проверить статус ответа и mime-тип в заголовках.

11. Улучшенный UX всех форм

Поработайте над UX. При редактировании профиля уведомите пользователя о процессе загрузки, поменяв текст кнопки на: «Сохранение...», пока данные загружаются:

Сделайте то же самое для формы добавления новой карточки и обновления аватара.

12. Требования к коду интеграции с API

Для работы с API создайте файл api.js. Все запросы присвойте переменным и экспортируйте их. В других модулях вы сможете импортировать эти функции и вызывать их. Вот небольшой пример того, как можно обустроить код в файле api.js:

13. Общие комментарии

- Не забывайте проверять, всё ли в порядке с ответом. Для этого можно использовать res.ok или res.status:
- Учитывайте случай, когда сервер вернул ошибку:
- Обрабатывайте ошибки, которые попадают в catch. Если запрос не ушёл на сервер или тот не ответил, сработает блок catch. Обрабатывайте ошибку внутри этого блока. Если нет времени писать сложную логику, просто выведите ошибку в консоль:

4. Пользуйтесь вкладкой Network для просмотра запросов. При отправке запросов держите вкладку Network открытой. Отфильтруйте в ней XHR запросы. Это позволит оперативно следить, что приходит в ответе от сервера.

Деплой на GitHub Pages

Сейчас в репозиторий загружены исходные файлы вашего проекта, но вам нужно собрать их и уже в собранном виде опубликовать для конечного пользователя.
