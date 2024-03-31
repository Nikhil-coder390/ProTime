import { MigrationInterface, QueryRunner } from 'typeorm'

export class Script1702311247028 implements MigrationInterface {
  name = 'Script1702311247028'

  public async up(queryRunner: QueryRunner): Promise<void> {

try {
      await queryRunner.query(
        `
        INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('e4adb013-a5ef-4cde-a2b8-943d98ae52a0', '1Litzy61@hotmail.com', 'pectus', 'https://i.imgur.com/YfJQV5z.png?id=3', 'terra appositus', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('adc014d2-00b0-41de-a404-5cc4665690ca', '13Hoyt34@gmail.com', 'curia quia', 'https://i.imgur.com/YfJQV5z.png?id=15', 'deputo', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('6d20283b-9582-4209-84b5-78ad15380860', '19Florence68@gmail.com', 'summopere', 'https://i.imgur.com/YfJQV5z.png?id=21', 'aptus', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('e8197bcf-16ca-47e2-bb6c-90c250c0b72a', '25Jody_Thiel@yahoo.com', 'demum peior', 'https://i.imgur.com/YfJQV5z.png?id=27', 'esse sumo condico', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('a2d020e6-c1c7-4b86-b77a-4d26000f2631', '31Ulises.Lind@yahoo.com', 'victoria celer depereo', 'https://i.imgur.com/YfJQV5z.png?id=33', 'cervus', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('6be76cc3-647b-4512-b047-0eb0ed762d0a', '37Omer.Krajcik-McCullough92@gmail.com', 'cilicium', 'https://i.imgur.com/YfJQV5z.png?id=39', 'tametsi asper', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('5651388a-61b1-4c87-9213-81b90edf0e03', '43Enid_Green-Stamm19@yahoo.com', 'vobis ambitus', 'https://i.imgur.com/YfJQV5z.png?id=45', 'utrimque desparatus aliquid', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('451536bc-1aac-4872-826f-d9a076c26b08', '49Viviane_Cole16@yahoo.com', 'aegrus', 'https://i.imgur.com/YfJQV5z.png?id=51', 'auctus suus', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('28b12247-b488-474e-ab3b-0f624760207e', '55Vickie_Gerhold@gmail.com', 'cena cibus', 'https://i.imgur.com/YfJQV5z.png?id=57', 'cura aggero', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');

INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('edc87453-9bac-40ed-b769-f958e1946ddc', 'volup', 'crepusculum cognatus distinctio', 'absens vitae vilis', '64Alysa_Crist@gmail.com', 'https://i.imgur.com/YfJQV5z.png?id=65', 'https://i.imgur.com/YfJQV5z.png?id=66', 'e8197bcf-16ca-47e2-bb6c-90c250c0b72a');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('3e345f38-f1ea-48cd-a1aa-9339be85372b', 'demergo explicabo', 'admoneo convoco', 'solutio', '71Raul51@gmail.com', 'https://i.imgur.com/YfJQV5z.png?id=72', 'https://i.imgur.com/YfJQV5z.png?id=73', '6be76cc3-647b-4512-b047-0eb0ed762d0a');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('012b9576-f7fa-4479-8a06-700d2858ea49', 'coadunatio demo', 'comparo aegrotatio', 'contra fugiat terebro', '78Francis.Kub@yahoo.com', 'https://i.imgur.com/YfJQV5z.png?id=79', 'https://i.imgur.com/YfJQV5z.png?id=80', '6be76cc3-647b-4512-b047-0eb0ed762d0a');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('f9ddeef5-a0f1-43de-894c-77e044085d2e', 'civitas facilis', 'ulciscor antea vitiosus', 'angelus', '85Sid79@hotmail.com', 'https://i.imgur.com/YfJQV5z.png?id=86', 'https://i.imgur.com/YfJQV5z.png?id=87', 'adc014d2-00b0-41de-a404-5cc4665690ca');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('bfb9dff5-5075-4289-a5fa-666f91be6a2e', 'caute bellicus stultus', 'dedecor', 'tot summopere', '92Syble_Hills64@hotmail.com', 'https://i.imgur.com/YfJQV5z.png?id=93', 'https://i.imgur.com/YfJQV5z.png?id=94', '451536bc-1aac-4872-826f-d9a076c26b08');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('8e15ad6f-c88f-4302-813a-31463cdd3795', 'ambitus terra tui', 'argentum a', 'caries careo vetus', '99Devonte.Braun40@yahoo.com', 'https://i.imgur.com/YfJQV5z.png?id=100', 'https://i.imgur.com/YfJQV5z.png?id=101', '6d20283b-9582-4209-84b5-78ad15380860');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('cd921108-d87e-470d-a3ab-bb96ce44bf8a', 'spoliatio tremo accusantium', 'viriliter vitae', 'temperantia', '106Dusty77@yahoo.com', 'https://i.imgur.com/YfJQV5z.png?id=107', 'https://i.imgur.com/YfJQV5z.png?id=108', 'a2d020e6-c1c7-4b86-b77a-4d26000f2631');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('d88571a1-148b-4a14-9d51-5d533ea80d1b', 'minus caute cogito', 'quaerat allatus', 'allatus caelestis', '113Lydia.Daugherty83@hotmail.com', 'https://i.imgur.com/YfJQV5z.png?id=114', 'https://i.imgur.com/YfJQV5z.png?id=115', '5651388a-61b1-4c87-9213-81b90edf0e03');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('99532f2f-1993-4be7-87e3-bd4055c78775', 'ceno sortitus cuius', 'nam summa', 'vita ascisco', '120Edgardo.Powlowski@gmail.com', 'https://i.imgur.com/YfJQV5z.png?id=121', 'https://i.imgur.com/YfJQV5z.png?id=122', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('844d50bb-f12b-481c-a08a-a25d98bd09a2', 'crepusculum amitto victus', 'amo', 'suppellex', '127Rhiannon.Green91@yahoo.com', 'https://i.imgur.com/YfJQV5z.png?id=128', 'https://i.imgur.com/YfJQV5z.png?id=129', '6d20283b-9582-4209-84b5-78ad15380860');

INSERT INTO "category" ("id", "name", "userId") VALUES ('4708f33e-332a-4f00-b19a-53aa5364d876', 'altus comedo', 'e4adb013-a5ef-4cde-a2b8-943d98ae52a0');
INSERT INTO "category" ("id", "name", "userId") VALUES ('c1dba54d-9860-4d40-ae03-9ec581c2852b', 'terreo avarus', '6be76cc3-647b-4512-b047-0eb0ed762d0a');
INSERT INTO "category" ("id", "name", "userId") VALUES ('8b0ba700-8fa8-49d1-be45-0c7aab1b2872', 'arceo templum appono', '6d20283b-9582-4209-84b5-78ad15380860');
INSERT INTO "category" ("id", "name", "userId") VALUES ('6c3810b6-8f88-4df3-af36-1a8578aa83cf', 'deputo ducimus', '28b12247-b488-474e-ab3b-0f624760207e');
INSERT INTO "category" ("id", "name", "userId") VALUES ('d9f66845-e4b7-4099-bbcb-db62b2b6b14c', 'umerus paulatim', 'adc014d2-00b0-41de-a404-5cc4665690ca');
INSERT INTO "category" ("id", "name", "userId") VALUES ('ec27e967-1996-458a-8eec-475053b15bfd', 'aveho aetas volo', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "category" ("id", "name", "userId") VALUES ('62afa984-4e83-49b7-8784-a600a9afcfb4', 'volo victoria assentator', '28b12247-b488-474e-ab3b-0f624760207e');
INSERT INTO "category" ("id", "name", "userId") VALUES ('77c6c8b1-dedd-41cb-a95c-84e71554db07', 'votum accommodo doloremque', '5651388a-61b1-4c87-9213-81b90edf0e03');
INSERT INTO "category" ("id", "name", "userId") VALUES ('6267dc05-8461-4d39-93ff-872410f6c50e', 'baiulus decet apto', 'e4adb013-a5ef-4cde-a2b8-943d98ae52a0');
INSERT INTO "category" ("id", "name", "userId") VALUES ('5460b550-c33d-4b78-902b-95de146b0be6', 'architecto spargo dicta', 'e8197bcf-16ca-47e2-bb6c-90c250c0b72a');

INSERT INTO "timeblock" ("id", "title", "startTime", "endTime", "categoryId", "userId") VALUES ('54dad510-5cfe-4b86-9379-5732b06f36ba', 'facilis thema cibus', '2024-11-08T01:39:53.763Z', '2023-12-03T15:04:15.763Z', '4708f33e-332a-4f00-b19a-53aa5364d876', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "timeblock" ("id", "title", "startTime", "endTime", "categoryId", "userId") VALUES ('beb1375a-4bd1-4e77-8bfd-c94795d84e29', 'minima debeo', '2023-05-31T07:51:54.939Z', '2024-10-28T03:21:10.385Z', '6c3810b6-8f88-4df3-af36-1a8578aa83cf', 'adc014d2-00b0-41de-a404-5cc4665690ca');
INSERT INTO "timeblock" ("id", "title", "startTime", "endTime", "categoryId", "userId") VALUES ('7b5fd48e-3db2-4b76-bb8f-2e26d63b8cce', 'vitae stillicidium', '2024-04-17T03:15:11.521Z', '2023-05-16T09:14:21.388Z', 'c1dba54d-9860-4d40-ae03-9ec581c2852b', 'e4adb013-a5ef-4cde-a2b8-943d98ae52a0');
INSERT INTO "timeblock" ("id", "title", "startTime", "endTime", "categoryId", "userId") VALUES ('bc123517-5f43-4cce-8387-5cb2b7474d52', 'censura ter vester', '2023-08-17T00:02:53.632Z', '2024-08-20T23:22:27.328Z', 'd9f66845-e4b7-4099-bbcb-db62b2b6b14c', 'a2d020e6-c1c7-4b86-b77a-4d26000f2631');
INSERT INTO "timeblock" ("id", "title", "startTime", "endTime", "categoryId", "userId") VALUES ('a28f071a-3675-435b-96d1-7efce194c0ab', 'cogo vito', '2024-02-27T14:33:29.750Z', '2024-06-22T11:54:28.509Z', 'd9f66845-e4b7-4099-bbcb-db62b2b6b14c', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "timeblock" ("id", "title", "startTime", "endTime", "categoryId", "userId") VALUES ('085ba066-e9b2-4f78-9dbb-4476520029b9', 'vilis cumque', '2023-09-15T14:14:27.488Z', '2023-10-03T03:00:18.817Z', '62afa984-4e83-49b7-8784-a600a9afcfb4', 'e4adb013-a5ef-4cde-a2b8-943d98ae52a0');
INSERT INTO "timeblock" ("id", "title", "startTime", "endTime", "categoryId", "userId") VALUES ('ae3a4518-2c51-448a-9223-1e6951b50b85', 'vehemens cilicium cubicularis', '2025-01-07T18:34:07.154Z', '2024-09-13T10:43:32.079Z', '6267dc05-8461-4d39-93ff-872410f6c50e', 'a2d020e6-c1c7-4b86-b77a-4d26000f2631');
INSERT INTO "timeblock" ("id", "title", "startTime", "endTime", "categoryId", "userId") VALUES ('0157f597-3c76-4332-8b02-8f2657e8fb8d', 'conservo vel stipes', '2023-11-14T01:25:41.481Z', '2024-05-16T00:48:22.500Z', 'ec27e967-1996-458a-8eec-475053b15bfd', 'adc014d2-00b0-41de-a404-5cc4665690ca');
INSERT INTO "timeblock" ("id", "title", "startTime", "endTime", "categoryId", "userId") VALUES ('80a13c8e-6d4f-45cd-b921-0baf56a6f2a6', 'eveniet', '2024-08-23T13:01:01.441Z', '2024-01-22T07:25:31.092Z', '6267dc05-8461-4d39-93ff-872410f6c50e', 'adc014d2-00b0-41de-a404-5cc4665690ca');
INSERT INTO "timeblock" ("id", "title", "startTime", "endTime", "categoryId", "userId") VALUES ('e4b931a5-458a-465a-b146-d67edc5f7040', 'absum adsidue sunt', '2023-10-31T05:04:36.649Z', '2024-08-10T22:09:43.014Z', '5460b550-c33d-4b78-902b-95de146b0be6', 'adc014d2-00b0-41de-a404-5cc4665690ca');

INSERT INTO "goal" ("id", "title", "description", "isCompleted", "categoryId", "userId") VALUES ('7523a280-e1a8-4451-bfc7-689797400bfd', 'reiciendis', 'conqueror appositus amitto', false, '6267dc05-8461-4d39-93ff-872410f6c50e', 'a2d020e6-c1c7-4b86-b77a-4d26000f2631');
INSERT INTO "goal" ("id", "title", "description", "isCompleted", "categoryId", "userId") VALUES ('13dd0e47-be5a-4dce-89fb-7b42f069d783', 'thesaurus', 'causa', true, '62afa984-4e83-49b7-8784-a600a9afcfb4', '5651388a-61b1-4c87-9213-81b90edf0e03');
INSERT INTO "goal" ("id", "title", "description", "isCompleted", "categoryId", "userId") VALUES ('8a70c7af-e836-44fe-adac-9d8bebeef197', 'basium tibi', 'cupiditas caries', true, '77c6c8b1-dedd-41cb-a95c-84e71554db07', 'adc014d2-00b0-41de-a404-5cc4665690ca');
INSERT INTO "goal" ("id", "title", "description", "isCompleted", "categoryId", "userId") VALUES ('67bdc84e-27c9-4d31-bef2-3416303d88ca', 'cohaero bestia', 'armarium', false, '8b0ba700-8fa8-49d1-be45-0c7aab1b2872', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "goal" ("id", "title", "description", "isCompleted", "categoryId", "userId") VALUES ('452e16d4-bc47-4807-ab47-b83c86daa207', 'molestiae', 'cuius dapifer canis', false, '8b0ba700-8fa8-49d1-be45-0c7aab1b2872', '5651388a-61b1-4c87-9213-81b90edf0e03');
INSERT INTO "goal" ("id", "title", "description", "isCompleted", "categoryId", "userId") VALUES ('2c4ee6a5-d2cc-4715-bd0e-01e0d96b8441', 'vitae temperantia vaco', 'peior cursus non', true, '8b0ba700-8fa8-49d1-be45-0c7aab1b2872', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "goal" ("id", "title", "description", "isCompleted", "categoryId", "userId") VALUES ('2bcb2ba5-d2cb-4474-b874-76350afff647', 'decretum patior', 'utilis', false, '77c6c8b1-dedd-41cb-a95c-84e71554db07', 'a2d020e6-c1c7-4b86-b77a-4d26000f2631');
INSERT INTO "goal" ("id", "title", "description", "isCompleted", "categoryId", "userId") VALUES ('fa8bfd4b-6ce8-4a77-aa6c-3aba6aba0f77', 'adeptio', 'conspergo', false, '77c6c8b1-dedd-41cb-a95c-84e71554db07', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "goal" ("id", "title", "description", "isCompleted", "categoryId", "userId") VALUES ('125cdbba-8624-47b3-abff-8b023ee6800d', 'aedificium unde statua', 'debilito', true, '6c3810b6-8f88-4df3-af36-1a8578aa83cf', '6d20283b-9582-4209-84b5-78ad15380860');
INSERT INTO "goal" ("id", "title", "description", "isCompleted", "categoryId", "userId") VALUES ('0fa76beb-6ff1-4cac-ae88-e11c864683e7', 'patrocinor solium saepe', 'adopto creo', false, '77c6c8b1-dedd-41cb-a95c-84e71554db07', '5651388a-61b1-4c87-9213-81b90edf0e03');

INSERT INTO "todolist" ("id", "title", "isCompleted", "userId") VALUES ('f01939ae-2f88-48ae-b2e4-41894ba5828a', 'aedificium auctor coniecto', true, '5651388a-61b1-4c87-9213-81b90edf0e03');
INSERT INTO "todolist" ("id", "title", "isCompleted", "userId") VALUES ('836ea1ed-cb06-4f6e-8abf-8fcbae0d7b5f', 'ventito', false, '6be76cc3-647b-4512-b047-0eb0ed762d0a');
INSERT INTO "todolist" ("id", "title", "isCompleted", "userId") VALUES ('8013b398-3ed0-4816-ba15-d00b6186bf6d', 'validus atrocitas stultus', true, '451536bc-1aac-4872-826f-d9a076c26b08');
INSERT INTO "todolist" ("id", "title", "isCompleted", "userId") VALUES ('f385cd5f-20a0-46d5-8578-4ced33d03762', 'thema arcesso arto', true, '451536bc-1aac-4872-826f-d9a076c26b08');
INSERT INTO "todolist" ("id", "title", "isCompleted", "userId") VALUES ('d636c580-30a9-414c-95ad-a7744e21cec6', 'ea cernuus torqueo', false, '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "todolist" ("id", "title", "isCompleted", "userId") VALUES ('d8dade17-a4ab-4829-8fea-a65d0039c2df', 'depopulo verbum', false, '6be76cc3-647b-4512-b047-0eb0ed762d0a');
INSERT INTO "todolist" ("id", "title", "isCompleted", "userId") VALUES ('c67b7ee1-0115-46be-b153-1af936405485', 'arcesso surculus', false, '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "todolist" ("id", "title", "isCompleted", "userId") VALUES ('352a9e53-312b-4ef4-bdd0-a1ed3108e378', 'succedo', false, 'e4adb013-a5ef-4cde-a2b8-943d98ae52a0');
INSERT INTO "todolist" ("id", "title", "isCompleted", "userId") VALUES ('fd2efdf5-ed80-4146-a1a8-8b44d5a4d5b7', 'totam cibo adicio', true, '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "todolist" ("id", "title", "isCompleted", "userId") VALUES ('c5885a0a-744f-44e4-b05c-581d2e35baa4', 'concido casus comes', true, 'adc014d2-00b0-41de-a404-5cc4665690ca');

INSERT INTO "todoitem" ("id", "content", "isCompleted", "todoListId") VALUES ('e905e372-d903-49e3-9fd0-06ad27582ae1', 'usus velut', false, 'd8dade17-a4ab-4829-8fea-a65d0039c2df');
INSERT INTO "todoitem" ("id", "content", "isCompleted", "todoListId") VALUES ('53f63f9d-950e-40b9-ba7b-22f2eb18064e', 'pax contra balbus', true, 'f385cd5f-20a0-46d5-8578-4ced33d03762');
INSERT INTO "todoitem" ("id", "content", "isCompleted", "todoListId") VALUES ('aa84c96c-9eb1-4470-af26-d70daa5dad08', 'averto', false, 'd8dade17-a4ab-4829-8fea-a65d0039c2df');
INSERT INTO "todoitem" ("id", "content", "isCompleted", "todoListId") VALUES ('effbe3c2-3080-428a-b2c8-9e16ca237932', 'cogito voluptas nesciunt', true, 'd636c580-30a9-414c-95ad-a7744e21cec6');
INSERT INTO "todoitem" ("id", "content", "isCompleted", "todoListId") VALUES ('e54e3ba2-402c-413e-a810-863f28438841', 'sonitus', true, 'c67b7ee1-0115-46be-b153-1af936405485');
INSERT INTO "todoitem" ("id", "content", "isCompleted", "todoListId") VALUES ('3c896ac0-a4ab-4f9e-a933-be00648c4831', 'sed', true, '836ea1ed-cb06-4f6e-8abf-8fcbae0d7b5f');
INSERT INTO "todoitem" ("id", "content", "isCompleted", "todoListId") VALUES ('2a67c924-79df-4460-9555-2c9337612025', 'candidus benigne brevis', true, 'f385cd5f-20a0-46d5-8578-4ced33d03762');
INSERT INTO "todoitem" ("id", "content", "isCompleted", "todoListId") VALUES ('1dfdd25d-990b-4409-8f2b-300e3e9ed311', 'unus tamquam', false, 'd8dade17-a4ab-4829-8fea-a65d0039c2df');
INSERT INTO "todoitem" ("id", "content", "isCompleted", "todoListId") VALUES ('94fae956-4318-4325-954a-33e4268c8b87', 'vir', true, '352a9e53-312b-4ef4-bdd0-a1ed3108e378');
INSERT INTO "todoitem" ("id", "content", "isCompleted", "todoListId") VALUES ('7ab84c4b-5240-4e46-a8c7-befc0e437520', 'acerbitas vae', true, 'd636c580-30a9-414c-95ad-a7744e21cec6');

INSERT INTO "calendardate" ("id", "date", "iconUrl", "userId") VALUES ('112b5655-e726-40ce-9687-044c8315af95', '2024-11-17T22:15:48.886Z', 'https://i.imgur.com/YfJQV5z.png?id=292', '6d20283b-9582-4209-84b5-78ad15380860');
INSERT INTO "calendardate" ("id", "date", "iconUrl", "userId") VALUES ('c32af0b3-14fc-4b78-bd19-1d08e55fccae', '2023-09-06T05:56:31.130Z', 'https://i.imgur.com/YfJQV5z.png?id=295', 'e4adb013-a5ef-4cde-a2b8-943d98ae52a0');
INSERT INTO "calendardate" ("id", "date", "iconUrl", "userId") VALUES ('0419e31c-2577-43e7-92c1-edba88dd6444', '2024-07-01T11:50:02.305Z', 'https://i.imgur.com/YfJQV5z.png?id=298', 'adc014d2-00b0-41de-a404-5cc4665690ca');
INSERT INTO "calendardate" ("id", "date", "iconUrl", "userId") VALUES ('4418d347-6ddf-480a-a63c-dc33cac1a811', '2025-01-14T12:32:15.819Z', 'https://i.imgur.com/YfJQV5z.png?id=301', '28b12247-b488-474e-ab3b-0f624760207e');
INSERT INTO "calendardate" ("id", "date", "iconUrl", "userId") VALUES ('b2f0ea8d-ed38-4ecb-ab0a-ba87fc9f4b88', '2024-06-20T04:47:48.657Z', 'https://i.imgur.com/YfJQV5z.png?id=304', 'e8197bcf-16ca-47e2-bb6c-90c250c0b72a');
INSERT INTO "calendardate" ("id", "date", "iconUrl", "userId") VALUES ('d6c0eecd-bf4c-4130-96f6-7a5cf8effcca', '2023-07-14T16:24:02.707Z', 'https://i.imgur.com/YfJQV5z.png?id=307', 'e8197bcf-16ca-47e2-bb6c-90c250c0b72a');
INSERT INTO "calendardate" ("id", "date", "iconUrl", "userId") VALUES ('1cc99d88-81e9-4032-adb2-089299dcd5da', '2023-10-26T07:32:45.394Z', 'https://i.imgur.com/YfJQV5z.png?id=310', '5651388a-61b1-4c87-9213-81b90edf0e03');
INSERT INTO "calendardate" ("id", "date", "iconUrl", "userId") VALUES ('7eb95eb7-37b8-4371-9591-f007d9be03b6', '2024-01-19T12:58:37.236Z', 'https://i.imgur.com/YfJQV5z.png?id=313', '5651388a-61b1-4c87-9213-81b90edf0e03');
INSERT INTO "calendardate" ("id", "date", "iconUrl", "userId") VALUES ('8b892b74-80ae-4f66-acac-8609c3dd04fd', '2024-02-13T22:31:28.711Z', 'https://i.imgur.com/YfJQV5z.png?id=316', '5651388a-61b1-4c87-9213-81b90edf0e03');
INSERT INTO "calendardate" ("id", "date", "iconUrl", "userId") VALUES ('9903c1e2-d0ef-4e5d-a954-975e82318bba', '2024-09-07T09:14:46.076Z', 'https://i.imgur.com/YfJQV5z.png?id=319', 'e4adb013-a5ef-4cde-a2b8-943d98ae52a0');

INSERT INTO "pomodorosession" ("id", "duration", "breakDuration", "userId") VALUES ('c44c49a1-2eaf-49ae-be16-eb43bcc8a3be', 242, 460, '5651388a-61b1-4c87-9213-81b90edf0e03');
INSERT INTO "pomodorosession" ("id", "duration", "breakDuration", "userId") VALUES ('9ba876dd-9f48-45d7-b324-ee2de90e60f3', 186, 89, '28b12247-b488-474e-ab3b-0f624760207e');
INSERT INTO "pomodorosession" ("id", "duration", "breakDuration", "userId") VALUES ('b20eef1c-d03e-47b8-9e3a-b3839f3c3eac', 953, 861, '6d20283b-9582-4209-84b5-78ad15380860');
INSERT INTO "pomodorosession" ("id", "duration", "breakDuration", "userId") VALUES ('e7cb9962-df67-4270-954a-d021d98e972b', 100, 834, '451536bc-1aac-4872-826f-d9a076c26b08');
INSERT INTO "pomodorosession" ("id", "duration", "breakDuration", "userId") VALUES ('8604ee24-5ec9-40bc-b4e4-c65c10b23d1a', 958, 459, '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "pomodorosession" ("id", "duration", "breakDuration", "userId") VALUES ('6048d3c2-9b54-45b2-8da3-d5dfcf755ade', 883, 177, 'a2d020e6-c1c7-4b86-b77a-4d26000f2631');
INSERT INTO "pomodorosession" ("id", "duration", "breakDuration", "userId") VALUES ('cd6d6363-6333-4b74-9b5f-150c31498370', 517, 881, 'a2d020e6-c1c7-4b86-b77a-4d26000f2631');
INSERT INTO "pomodorosession" ("id", "duration", "breakDuration", "userId") VALUES ('e769bc2c-f50c-4fdc-8d8a-7dddaf3480c7', 853, 50, 'e8197bcf-16ca-47e2-bb6c-90c250c0b72a');
INSERT INTO "pomodorosession" ("id", "duration", "breakDuration", "userId") VALUES ('3f7fb578-93e8-45ff-a612-ba2e173fa70f', 858, 232, '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "pomodorosession" ("id", "duration", "breakDuration", "userId") VALUES ('06d3094c-7fd9-447a-9954-155a2678f198', 220, 536, '6d20283b-9582-4209-84b5-78ad15380860');

INSERT INTO "progresstracker" ("id", "progressPercentage", "goalId") VALUES ('5822ebc2-edfc-4649-ab05-8226c17c629a', 746, 'fa8bfd4b-6ce8-4a77-aa6c-3aba6aba0f77');
INSERT INTO "progresstracker" ("id", "progressPercentage", "goalId") VALUES ('030f410c-ac3d-45c3-baa5-52a36d9230fe', 713, 'fa8bfd4b-6ce8-4a77-aa6c-3aba6aba0f77');
INSERT INTO "progresstracker" ("id", "progressPercentage", "goalId") VALUES ('ecdca721-1f7f-49fe-a95e-db88c54664a4', 448, '452e16d4-bc47-4807-ab47-b83c86daa207');
INSERT INTO "progresstracker" ("id", "progressPercentage", "goalId") VALUES ('5460dde2-70b6-4f17-b7dc-5f43e69f107d', 978, '8a70c7af-e836-44fe-adac-9d8bebeef197');
INSERT INTO "progresstracker" ("id", "progressPercentage", "goalId") VALUES ('51913dcd-a196-494a-894a-1cf8ba663401', 603, 'fa8bfd4b-6ce8-4a77-aa6c-3aba6aba0f77');
INSERT INTO "progresstracker" ("id", "progressPercentage", "goalId") VALUES ('8db724e5-c295-4e4d-832f-859e551aa6fb', 671, '2c4ee6a5-d2cc-4715-bd0e-01e0d96b8441');
INSERT INTO "progresstracker" ("id", "progressPercentage", "goalId") VALUES ('4507129e-a67f-4c00-b954-3b4dbef32d12', 472, '67bdc84e-27c9-4d31-bef2-3416303d88ca');
INSERT INTO "progresstracker" ("id", "progressPercentage", "goalId") VALUES ('030f0e4e-26b3-4368-b05a-65e7c5040b3d', 437, '7523a280-e1a8-4451-bfc7-689797400bfd');
INSERT INTO "progresstracker" ("id", "progressPercentage", "goalId") VALUES ('8c2966e1-d40b-460e-9392-981690cb6391', 226, '0fa76beb-6ff1-4cac-ae88-e11c864683e7');
INSERT INTO "progresstracker" ("id", "progressPercentage", "goalId") VALUES ('a6f95766-9a32-48d3-b77f-7eecbfb02f5f', 360, '452e16d4-bc47-4807-ab47-b83c86daa207');
    `,
      )
    } catch (error) {
      // ignore
    }

}

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
