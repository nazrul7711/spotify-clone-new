/*
use shop?
insert one object
what is collection and document
mongoose String, Number,Date,Boolean,
Models take your schema and apply it to each document in its collection.
insert many documents
delete one document
update a documnet
$set will do what?
if u update a schema what u will have to do?
how to use $gt
can u run forEach or map on find()
how to get only the name and not the objectId
projection ?
what is embedded document
how to get doc with hobbies only of dance array
how to get doc with hobbies only of dance object hobbies.sports will work?
books.aggregate([{$lookup:{from:,localField:,foreignField:,as:}}])
find one doc
query embedded doc greter than 98 or equal to "something"
if u have a array how will u find array having exact ['drama']
how $in works
if $in works how will u find everything that is not in like [10,23]
$or:[{},{},{}]
what will $and and $nor do

is there any difference find({cond1,cond2,cond3}) find($and:[{cond1},{cond2}])

why do we need $and the find({"movie":{$and:[genre:"horror",genre:"romance"]}})

age:{$exists:true,$gt:43}

if a field has null value will $exists find it ?

create a phone field which can have both number and string

find me phone if the type is number

find me a song which has beautiful in it

if u have an array of embedded document then find docs where the u have title :'sports'

if u want to find a doc with a array of size 3 ?

do u think this will work $size:{$gt:3}?

$all will do what?

if u have hobbies that is array of objects and u have two objects {title:"sports",frequency:12},{title:"hello",frequency:3}
what do u think hobbies.title:"sports",hobbies.frequency:3 will find

sort find search by hobbies.title in asc and song by desc

skip by 10

limit only 5 output

if u have a array of sth and u want to see only 2 output how?

UPDATE

increment a number value?

can u increment and change a value at same time

what $min does?

how would u set a fild value to null when suppose isSmarty is true

how would u completly remove phone field if isSmarty is true

$unset,$rename does what?

try to update a document if it exists and if not create one

how will u find a document where u want hobbies.title ="sports" and hobbies.frequency = 2 and this is a scenario where the array has two objects {title:sports,frequency:23},{title:hiking,frequency:2} hobbies:{$elemMatch:{title:"sports",frequency:2}}


explain $elemMatch and how we need it for an array why $and wont work

$set:{"hobbies.$.setSomeMark":true}









*/
