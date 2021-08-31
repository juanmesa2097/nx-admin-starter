BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[Profile] (
    [id] INT NOT NULL IDENTITY(1,1),
    [firstName] VARCHAR(25) NOT NULL,
    [middleName] VARCHAR(25) NOT NULL,
    [lastName] VARCHAR(25) NOT NULL,
    [dateOfBirth] DATETIME2 NOT NULL,
    [createdAt] DATETIME2 NOT NULL CONSTRAINT [DF__Profile__createdAt] DEFAULT CURRENT_TIMESTAMP,
    [updatedAt] DATETIME2 NOT NULL,
    [userId] NVARCHAR(1000) NOT NULL,
    CONSTRAINT [PK__Profile__id] PRIMARY KEY ([id]),
    CONSTRAINT [Profile_userId_unique] UNIQUE ([userId])
);

-- AddForeignKey
ALTER TABLE [dbo].[Profile] ADD CONSTRAINT [FK__Profile__userId] FOREIGN KEY ([userId]) REFERENCES [dbo].[User]([id]) ON DELETE CASCADE ON UPDATE CASCADE;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN 
    ROLLBACK TRAN;
END;
THROW

END CATCH
