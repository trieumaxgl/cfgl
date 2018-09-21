
-- Bảng danh mục type 
create table type (
	  id int not null auto_increment
	, name nvarchar(255) not null				
	, descr text   
	, status int
	, primary key(id)
);

create table role (
      id int not null  auto_increment
    , name nvarchar(255) unique 
    , primary key (id)
);

create table permission (
      id int not null  auto_increment
    , name nvarchar(255) unique 
    , primary key (id)
);

create table role_permission (
      id int not null  auto_increment
    , role int 
	, permission int
    , primary key (id)
	, foreign key (role) references role(id)
	, foreign key (permission) references permission(id)
);

create table user (
	  id int not null auto_increment
	, email varchar(255) not null unique	-- tên đăng nhập
	, password varchar(255) not null
	, firstname varchar(128)
	, lastname varchar(128)
	, phone nvarchar(11)
	, address nvarchar(255)
	, avatar longblob
	, description text
	, birthday date
	, gender int
	, role int 
	, status int
	, primary key (id)
	, foreign key (role) references role(id)
);

-- Bảng items
create table items (
	  id int not null auto_increment
	, name nvarchar(128)						
	, descr text          									  	 			
	, price decimal
	, type int
	, status int default 0	
	, primary key (id)
	, FOREIGN KEY (type) REFERENCES type(id)
);

-- Attached images or any files for item of the library.
create table attach_file (
	  id int not null auto_increment	
	, item int											
	, image longblob			
	, primary key (id)
	, foreign key (item) references items(id) on delete cascade
);

create table bill (
	  id int auto_increment
	, user int not null
	, address nvarchar(255)
	, total decimal
	, date datetime
	, phone nvarchar(11)
	, status int
	, primary key(id)
	, foreign key(user) references user(id)
);

create table bill_item (
	  id int not null auto_increment
	, bill int
	, item int											
	, quantity int 
	, price decimal
	, status int
	, primary key (id)
	, foreign key (bill) references bill(id) 
	, foreign key (item) references items(id)
);

create table sale (
	  id int auto_increment
	, discount decimal
	, date_start datetime
	, date_end datetime
	, primary key(id)
);

create table sale_item (
	  id int not null auto_increment
	, sale int
	, item int											
	, primary key (id)
	, foreign key (sale) references sale(id) 
	, foreign key (item) references items(id)
);