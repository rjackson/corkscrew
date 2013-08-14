Objectives
==========

* Keep track of various varieties of wine and the timing of the various stages.
* Allow input of basic customer information,  and variety when starting a new batch.
* Add future actions at predetermined days in future to keep track of which steps are needed for each batch.
* Keep track of information at each stage:
  * Specific Gravity
  * Temperature
  * PH
  * Comments
* Display snapshot of pending activity (defined as actions need to be taken).
* Allow displaying activity for a given date (any date requested).
* At bottling allow showing current alcohol content based on starting and ending specific gravity and temp.

Future Features
===============

* Add customer correspondence at various stages.
  * Before bottling event (as a reminder).
  * At each stage to keep it fresh in their mind.
* Ask customers to fill out a questionaire after a bottling (and potentially after maturity).
* Add customer login section:
  * Allow them to check the status of their batches (including stages and notes).
  * Allow them to make referrals for a discount?
* Use email addresses for email newsletter?

Additional Information
======================

Stages:
  Primary
  Secondary
  Degassing
  Clarifying
  Bottling
  Maturation?

Models
======
* Customer
  * name:string email:string
* BatchType
  * name:string
* Actions
  * batch_type_id:number action_type_id:number trigger_age:number created_at:date updated_at:date
* Batch
  * batch_type_id:number customer_id:number created_at:date updated_at:date
