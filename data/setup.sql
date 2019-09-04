CREATE USER NodeJsWithAzure WITH PASSWORD = 'KFJKDJFEQIADF3'

EXECUTE sp_addrolemember db_datareader, "nodeWithAzure"
EXECUTE sp_addrolemember db_datawriter, "nodeWithAzure"

CREATE TABLE users(
    id INT INDENTITY PRIMARY KEY,
    name nvarchar(255),
    email nvarchar(255)
);

select * from users