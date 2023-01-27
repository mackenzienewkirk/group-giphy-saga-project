CREATE DATABASE "giphy_search_favorites";

-- You'll need a table for storing each giphy image favorite
-- Each favorite image can be assigned 1 of the following categories as a Foreign Key

-- Category table
CREATE TABLE "category" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR (100) NOT NULL
);

-- Default categories. You may change them :)
INSERT INTO "category" ("name")
VALUES ('funny'), ('cohort'), ('cartoon'), ('nsfw'), ('meme');

-- ** LAUREN ADDED **
CREATE TABLE "favorites" (
	"id" SERIAL PRIMARY KEY,
	"favorite" BOOLEAN DEFAULT FALSE,
	"url" TEXT,
	"name" TEXT,
	"category" INTEGER REFERENCES "category"
);

INSERT INTO "favorites" 
("favorite", "url", "name")
VALUES
(TRUE, 'https://media.giphy.com/media/1YcLOSW6JCNdsfSr5E/giphy.gif', 'Kermit The Frog Dancing Sticker' );
