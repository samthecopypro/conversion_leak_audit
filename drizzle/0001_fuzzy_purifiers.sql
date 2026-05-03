CREATE TABLE `leads` (
	`id` int AUTO_INCREMENT NOT NULL,
	`email` varchar(320) NOT NULL,
	`submittedAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `leads_id` PRIMARY KEY(`id`),
	CONSTRAINT `leads_email_unique` UNIQUE(`email`)
);
