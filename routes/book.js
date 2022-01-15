const express=require('express')
const db=require('../db')
const utils=require('../utils')

const router=express.Router()

router.get('/',(request,response)=>{
  const connection=db.openConnection()
  const statement=`select * from Book`
  connection.query(statement,(error,data)=>{
      connection.end()
      response.send(utils.createResult(error,data))
  })
})

router.post('/',(request,response)=>{
   const {book_title,publisher_name,author_name}=request.body
    const connection=db.openConnection()
    const statement=`insert into Book values (default,'${book_title}','${publisher_name}','${author_name}')`
    connection.query(statement,(error,data)=>{
        connection.end()
        response.send(utils.createResult(error,data))
    })
  })

  router.put('/:id',(request,response)=>{
    const {id}=request.params
  const {book_title,publisher_name,author_name}=request.body
   const connection=db.openConnection()
   const statement=`update Book set publisher_name='${publisher_name}',author_name='${author_name}' where book_id='${id}'`
   connection.query(statement,(error,data)=>{
       connection.end()
       response.send(utils.createResult(error,data))
   })
 })

 router.delete('/:id',(request,response)=>{
    const {id}=request.params
   const connection=db.openConnection()
   const statement=`delete from Book where book_id='${id}'`
   connection.query(statement,(error,data)=>{
       connection.end()
       response.send(utils.createResult(error,data))
   })
 })

module.exports=router