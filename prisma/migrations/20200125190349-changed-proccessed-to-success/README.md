# Migration `20200125190349-changed-proccessed-to-success`

This migration has been generated by Matthias Schaider at 1/25/2020, 7:03:49 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql

```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200125181341-changed-bignumber-to-float..20200125190349-changed-proccessed-to-success
--- datamodel.dml
+++ datamodel.dml
@@ -3,9 +3,9 @@
 }
 datasource db {
   provider = "sqlite"
-  url = "***"
+  url      = "file:dev.db"
 }
 model User {
   id       String  @default(cuid()) @id
@@ -46,7 +46,7 @@
 }
 enum TransactionState {
   Pending
-  Processed
+  Success
   Failed
 }
```


