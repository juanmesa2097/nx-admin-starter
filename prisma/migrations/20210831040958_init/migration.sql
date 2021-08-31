BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[User] (
    [id] NVARCHAR(1000) NOT NULL,
    [username] VARCHAR(25) NOT NULL,
    [password] NVARCHAR(1000) NOT NULL,
    [email] VARCHAR(60) NOT NULL,
    [emailConfirmed] BIT NOT NULL,
    [twoFactorEnabled] BIT NOT NULL,
    [status] VARCHAR(10) NOT NULL,
    [createdAt] DATETIME2 NOT NULL,
    [updatedAt] DATETIME2 NOT NULL,
    CONSTRAINT [PK__User__id] PRIMARY KEY ([id]),
    CONSTRAINT [User_username_unique] UNIQUE ([username]),
    CONSTRAINT [User_email_unique] UNIQUE ([email])
);

-- CreateTable
CREATE TABLE [dbo].[Post] (
    [id] INT NOT NULL IDENTITY(1,1),
    [title] NVARCHAR(1000) NOT NULL,
    [published] BIT NOT NULL CONSTRAINT [DF__Post__published] DEFAULT 1,
    [authorId] NVARCHAR(1000) NOT NULL,
    CONSTRAINT [PK__Post__id] PRIMARY KEY ([id])
);

-- AddForeignKey
ALTER TABLE [dbo].[Post] ADD CONSTRAINT [FK__Post__authorId] FOREIGN KEY ([authorId]) REFERENCES [dbo].[User]([id]) ON DELETE CASCADE ON UPDATE CASCADE;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN 
    ROLLBACK TRAN;
END;
THROW

END CATCH
