# Jira & HubSpot Ticket Management System

This project is a full-stack web application designed to manage Jira tickets across multiple projects and integrate with HubSpot. It includes features such as ticket creation, editing, commenting with file/image upload, manual and automatic assignment based on agent shifts and workload, and SQL database integration.

---

## 📦 Features

- Create, edit, delete tickets
- Add comments with file/image upload
- Manual and auto-assignment of tickets
- Modify all ticket properties including status
- Pagination for large data sets
- SQL database integration
- Frontend UI for agent shift setup
- Multiple views based on filters

---

## 🧠 Architecture Overview

[Frontend - React.js]
    |
    |-- TicketList.jsx
    |-- ShiftManager.jsx
    |
[Backend - Node.js + Express]
    |
    |-- server.js
    |-- db.js
    |-- routes/
    |     |-- tickets.js
    |     |-- agents.js
    |
    |-- controllers/
    |     |-- ticketController.js
    |     |-- agentController.js
    |
    |-- middleware/
    |     |-- upload.js
    |
[Database - MySQL]
    |
    |-- ticket_system
          |-- tickets
          |-- agents
          |-- shifts
