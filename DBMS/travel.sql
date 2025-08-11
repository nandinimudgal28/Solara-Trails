create database TRAVEL_AGENCY;
USE TRAVEL_AGENCY;
create table locations (
attid int primary key,
name varchar(50),
type varchar(50),
fees int
);
insert into locations values(1,'Pangong tso','water body',400);

insert into locations values(2,'Thiksey monastery','religious site',20);

insert into locations values(3,'Hall of fame','history museum',250);

insert into locations values(4,'Khardung la','scenic drive',20);

insert into locations values(5,'Nubra valley','valley',420);

insert into locations values(6,'Sand dunes leisure','nature and wildlife',1000);

insert into locations values(7,'Zanskar valley','valley',NULL);

insert into locations values(8,'Hunder sand dunes','scenic drive',500);

insert into locations values(9,'Leh royal palace','architectural build',15);

select * from locations order by attid;

create table activities(   
    activity_id int primary key,   
    name varchar(50),   
    types varchar(50),   
    duration varchar(50),  
    cost int,  
    attid int,
     foreign key (attid) references locations(attid)  
    );
  
insert into activities values(1,'Chadar Trek','Ice Sport','8 Days',22500,4);

insert into activities values(2,'Motor Biking','Adventure','2 Days',18500,5);

insert into activities values(3,'Spot a Snow Leopard','Scenic Visuals','Dawn and Dusk',20000,7);

insert into activities values(4,'Indus River Rafting','Rafting','2 Days',18000,4);

insert into activities values(5,'Go on Camel Ride','Scenic Visuals','2 Hrs',14440,9);

insert into activities values(6,'Go on Yak Safari','Scenic Visuals','2 Hrs',4000,1);

insert into activities values(7,'Skiing','Ice Sport','6 Days',25000,8);

insert into activities values(8,'Royal Leh Palace','Scenic Visuals','2 Hrs',1500,8);

insert into activities values(9,'Magnetic Hills','Scenic Visuals','2 Hrs',10000,7);

insert into activities values(10,'Tso Moriri Lake','Scenic Visuals','2 Hrs',10000,9);

select * from activities order by activity_id;

create table activityNF3(   
    types varchar(30)  primary key,   
    Medical varchar(50)   
);

insert into activityNF3 values('Ice Sport','High BP');

insert into activityNF3 values('Adventure','Acrophobia');

insert into activityNF3 values('Rafting','Asthma and Heart Condition');

insert into activityNF3 values('Scenic Visuals','Breathing Problem');

select * from activityNF3 ;

create table accomodation(   
    accid int primary key,   
    name varchar(30),   
    contactno varchar(10),   
    price varchar(30),   
    rating float check(rating > 0 and rating <= 5),   
    attid int,  
    foreign key (attid) references locations(attid)  
);
insert into accomodation values(1,'Misty Hills Cabins',9985463210,6127,4.2,1);

insert into accomodation values(2,'The Driftwood',9564442223,7840,4.1,3);

insert into accomodation values(3,'Ladakh Sarai Resort',7455511236,8200,5,2);

insert into accomodation values(6,'The Indus Valley',7201650955,9027,5,7);

insert into accomodation values(7,'Ichang Nang Retreat',7027854667,5200,5,9);

insert into accomodation values(8,'Nubra Ecolodge',9419523332,3818,3.5,8);

insert into accomodation values(9,'Hunder Resort',9215685554,8450,4.5,4);

insert into accomodation values(10,'The Zen Resort',9256152300,3200,3.2,3);

select * from accomodation order by accid;

create table food(   
    accid int,
    restid int,   
    primary key(accid,restid),  
    rname varchar(20),   
    rcontact varchar(10),   
    rrating float check(0<rrating and rrating<=5)   ,
    foreign key (accid) references accomodation(accid)  
);
insert into food values(8,1,'chaska masala',9419216332,3);

insert into food values(7,2,'summer savoryle',7006749221,4.8);

insert into food values(1,3,'mithai wa leh',9999227196,4.5);

insert into food values(6,4,'summer harvest',9906986556,4.2);

insert into food values(9,5,'riyul restaurant',9995552241,3.8);

insert into food values(7,6,'wachan garden',9906465006,3.9);

insert into food values(7,7,'gyantse restaurant',7658200148,4.1);

insert into food values(2,8,'forno',9622965941,3.5);

insert into food values(6,9,'rangyul guest house',9854321650,4.2);

insert into food values(8,10,'apple restaurant',9418326778,4);

insert into food values(6,11,'Hotel Lingzi',9555333412,4);

insert into food values(3,12,'Dapka House',7522354123,3.8);

create table tourPackage(   
    package_id int,   
    name varchar(50),   
    duration int,   
    deptLoc varchar(50),   
    arrLoc varchar(50)   
);

insert into tourPackage values(1,'Incredible Ladakh',8,'New Delhi','Leh');

insert into tourPackage values(2,'Experience Ladakh',7,'New Delhi','Leh');

insert into tourPackage values(3,'Beautiful Ladakh',6,'New Delhi','Leh');

insert into tourPackage values(4,'Enchanting Ladakh',8,'New Delhi','Leh');

insert into tourPackage values(5,'Riveting Ladakh',7,'New Delhi','Leh');

insert into tourPackage values(6,'Ladakh Bike Expenditure',9,'Chandigarh','Leh');

insert into tourPackage values(7,'Ladakh Bike Adventure',11,'Chandigarh','Leh');

insert into tourPackage values(8,'Revel the beautiful roads',8,'Chandigarh','Leh');

insert into tourPackage values(9,'Bike Adventure to Ladakh',13,'Manali','Leh');

insert into tourPackage values(10,'Ladakh Bike Quest',9,'Manali','Leh');

select * from tourPackage order by package_id;


create table food_nf2(   
    restid int primary key,   
    rtype varchar(20)   
);

insert into food_nf2 values(1,'indian');

insert into food_nf2 values(2,'chinese');

insert into food_nf2 values(3,'italian');

insert into food_nf2 values(4,'tibetan');

insert into food_nf2 values(5,'multi');

insert into food_nf2 values(6,'himalayan');


create table tourPackageNF2(   
    duration int primary key,   
    avg_price int   
);

insert into tourPackageNF2 values(8,64000);

insert into tourPackageNF2 values(7,60000);

insert into tourPackageNF2 values(6,55000);

insert into tourPackageNF2 values(9,68000);

insert into tourPackageNF2 values(11,70000);

insert into tourPackageNF2 values(13,85000);

select * from tourPackageNF2 order by duration;

create table transportation(   
    transid int primary key,   
    transtype varchar(20) check(transtype in('airways','railways','roadways')),   
    company varchar(30),   
    deptloc varchar(20)   
);

insert into transportation values(1,'airways','air india','New Delhi');

insert into transportation values(2,'airways','spice jet','New Delhi');

insert into transportation values(3,'airways','vistara','New Delhi');

insert into transportation values(4,'railways','vande bharat express','New Delhi');

insert into transportation values(5,'railways','malwa express','New Delhi');

insert into transportation values(6,'railways','hemkunt express','Chandigarh');

insert into transportation values(7,'railways','shri shakti express','Chandigarh');

insert into transportation values(8,'roadways','vikas travels','Manali');

insert into transportation values(9,'roadways','laxmi holidays','Manali');

insert into transportation values(10,'roadways','haridas tour and travels','Chandigarh');

select * from transportation order by transid;


create table transportation_nf3(   
    transtype varchar(20) primary key,   
    price int  
);

insert into transportation_nf3 values('airways',6000);

insert into transportation_nf3 values('railways',1500);

insert into transportation_nf3 values('roadways',2000);

select * from transportation_nf3;


select activity_id, name, count(types) from activities   
where duration = '2 Days' group by activity_id, name;

select types, count(*) from activities   
where duration = '2 Days' group by types;

select types, count(*) from activities   
where duration = '2 Hrs' group by types;

SELECT activity_id,COUNT(*) AS activity_count FROM activities WHERE duration = '2 Days'GROUP BY activity_id;

select count(types) from activities where duration = '2 Days' group by types;

select types,count(types) from activities where duration = '2 Days' group by types;

select name, count(types) from activities   
where duration = '2 Days' group by activity_id, name;


select name from activities   
where duration = '2 Days' group by name;

select activity_id,name, count(types) from activities   
where duration = '2 Days' group by activity_id, name;

select name from activities   
where duration = '2 Days' group by name;

select types, count(*) from activities   
where duration = '2 Days' group by types;

select types, count(*) from activities   
where duration = '2 Hrs' group by types;

select * from food natural join food_nf2   
where accid = 4 and rtype in ('italian' , 'tibetan');

select * from food natural join food_nf2  
where rrating > (select rrating from food where rname = 'apple restaurant'  ) or rtype in (  
    select rtype from food_nf2 where rname = 'summer savoryle'  
);

select * from locations   
where fees <= 500 and type = 'valley';

select * from locations  
where fees <= 500 and type = 'scenic drive';

select * from locations natural join accomodation   
where rating > 3 and name = 'Hall of fame';

select name, contactno, price from locations natural join accomodation   
where rating > 3 and name = 'Hall of fame';

select * from accomodation   
where rating >= 4 and price < 7000;

select * from tourPackage natural join transportation   
where deptLoc = 'New Delhi' and duration > 7;

select name from tourPackage natural join transportation   
where deptLoc = 'New Delhi' and duration > 7;

select name from tourPackage natural join transportation   
where deptLoc = 'Manali' and duration > 7;

select name,company from tourPackage natural join transportation   
where deptLoc = 'Manali' and duration > 7;

select package_id, name from tourPackage natural join tourPackageNF2  
where deptLoc = 'Chandigarh' and avg_price < 75000;

select name, duration from tourPackage natural join tourPackageNF2  
where avg_price < ( select avg_price from tourPackageNF2 natural join tourPackage   
    where name = 'Revel the beautiful roads'  
);

select package_id, name from tourPackage natural join tourPackageNF2  
where deptLoc = 'Chandigarh' and avg_price < 75000;

select name, duration from tourPackage natural join tourPackageNF2  
where avg_price < (select avg_price from tourPackageNF2 natural join tourPackage   
    where name = 'Revel the beautiful roads'  
);



    

