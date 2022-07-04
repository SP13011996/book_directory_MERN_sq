## Open Endpoints

## For books

- [Books] : `GET https://immense-ravine-73292.herokuapp.com/api/book/`
- [Books] : `GET https://immense-ravine-73292.herokuapp.com/api/book/:bookId`
- [Books] : `PUT https://immense-ravine-73292.herokuapp.com/api/book/:bookId`
- [Books] : `POST https://immense-ravine-73292.herokuapp.com/api/book/`
- [Books] : `DELETE https://immense-ravine-73292.herokuapp.com/api/book/:bookId`

## URL

https://immense-ravine-73292.herokuapp.com/

# JSON FOR POST/UPDATING

```json
{
bookname:[String],
author:{
authorname:[String],
authorage:[Number]
},
genre:[String],
price:[Number],
dateofPublication:[Date(yyyy/mm/dd)],
chapters:[Array]
}
```
