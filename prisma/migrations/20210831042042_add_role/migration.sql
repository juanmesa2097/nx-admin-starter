/*
  Warnings:

  - You are about to drop the `Post` table. If the table is not empty, all the data it contains will be lost.

*/
BEGIN TRY

BEGIN TRAN;

-- DropForeignKey
ALTER TABLE [dbo].[Post] DROP CONSTRAINT [FK__Post__authorId];

-- AlterTable
ALTER TABLE [dbo].[User] ADD CONSTRAINT [DF__User__createdAt] DEFAULT CURRENT_TIMESTAMP FOR [createdAt], CONSTRAINT [DF__User__emailConfirmed] DEFAULT 0 FOR [emailConfirmed], CONSTRAINT [DF__User__status] DEFAULT 'ACTIVE' FOR [status], CONSTRAINT [DF__User__twoFactorEnabled] DEFAULT 1 FOR [twoFactorEnabled];

-- DropTable
DROP TABLE [dbo].[Post];

-- CreateTable
CREATE TABLE [dbo].[Role] (
    [id] NVARCHAR(1000) NOT NULL,
    [name] VARCHAR(25) NOT NULL CONSTRAINT [DF__Role__name] DEFAULT 'USER',
    [status] VARCHAR(10) NOT NULL CONSTRAINT [DF__Role__status] DEFAULT 'ACTIVE',
    [userId] NVARCHAR(1000) NOT NULL,
    CONSTRAINT [PK__Role__id] PRIMARY KEY ([id]),
    CONSTRAINT [Role_name_unique] UNIQUE ([name])
);

-- AddForeignKey
ALTER TABLE [dbo].[Role] ADD CONSTRAINT [FK__Role__userId] FOREIGN KEY ([userId]) REFERENCES [dbo].[User]([id]) ON DELETE CASCADE ON UPDATE CASCADE;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN 
    ROLLBACK TRAN;
END;
THROW

END CATCH
