const asyncHandler = require('express-async-handler');
const dbConnect = require("../dbConnect4mysql");

// @desc Get all contacts
// @route GET /contacts
const getAllContacts = asyncHandler(async (req, res) => { 
  // 전체 연락처 보기 
  console.log('전체 연락처 보기');

  dbConnect.query('SELECT id, name, email, phone FROM Contacts', function(error, results, fields) {
    if (error) console.error(JSON.stringify(err)); // throw new Error("All Contacts not read");
    if (results.length > 0) {
      console.log(results);
      //console.log(fields);
      res.status(200).send('Read All Contacts');
    } else {         
      console.log('No Contacts'); 
      res.status(200).send('No Contacts');      
    }            
  });
});

// @desc Create a contact
// @route POST /contacts
const createContact = asyncHandler(async (req, res) => {
  // �� ����ó �߰��ϱ�
  console.log('�� ����ó �߰��ϱ�');
  console.log(req.body);
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    return res.status(400).send("�ʼ����� �Էµ��� �ʾҽ��ϴ�.");
  }

  dbConnect.execute('INSERT INTO Contacts (name, email, phone) VALUES (?, ?, ?)', [name, email, phone], function(error, results) {
    if (error) throw new Error("Contact not created");
    console.log(results);
    res.status(200).send("Create Contact");
    //res.redirect("/contacts");
  });
});

// @desc Get contact
// @route GET /contacts/:id
const getContact = asyncHandler(async (req, res) => {
  // Ư�� ����ó ����
  console.log('Ư�� ����ó ����');
  console.log(req.params.id);
  const id = req.params.id;

  dbConnect.query('SELECT id, name, email, phone FROM Contacts WHERE id = ?', [id], function(error, results) {
    if (error) throw new Error('Contact not read');
    if (results.length > 0) {       // db������ ��ȯ���� ������ �α��� ����
      console.log(results);
      res.status(200).send('Read Contact');
    } else {        
      console.log('No Contacts'); 
      res.status(200).send('No Contacts');     
    }            
  });
});

// @desc Update contact
// @route PUT /contacts/:id
const updateContact = asyncHandler(async (req, res) => {
  // Ư�� ����ó ������Ʈ
  const id = req.params.id;
  const { name, email, phone } = req.body;

  dbConnect.execute('UPDATE Contacts SET name = ?, email = ?, phone = ? WHERE id = ?', [name, email, phone, id], function(error, results) {
    if (error) throw new Error("Contact not updated");
    console.log(results);
    res.status(200).send("Update Contact");
    //res.redirect("/contacts");
  });
});

// @desc Delete contact
// @route DELETE /contacts/:id
const deleteContact = asyncHandler(async (req, res) => {
  // Ư�� ����ó ����
  const id = req.params.id;
  const { name, email, phone } = req.body;

  dbConnect.execute('DELETE FROM Contacts WHERE id = ?', [id], function(error, results) {
    if (error) throw new Error("Contact not deleted");
    console.log(results);
    res.status(200).send("Delete Contact");
    //res.redirect("/contacts");
  });
});

module.exports = {
    getAllContacts,
    createContact,
    getContact,
    updateContact,
    deleteContact,
};