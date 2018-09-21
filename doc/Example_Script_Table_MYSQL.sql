use cfgl;

INSERT INTO `role` (`name`) VALUES ('ROLE_ADMIN');

INSERT INTO `permission` (`name`) VALUES ('Sua doi du lieu');

INSERT INTO `role_permission` (`role`,`permission`) VALUES ('1','1');

INSERT INTO `user` (`email`,`password`,`firstname`,`lastname`,`phone`,`address`,`description`,`birthday`,`gender`,`role`,`status`) 
	VALUES ('trieu@gmail.com','$2a$10$Vk1DSVei86fK7xjM0cN2Me4hG86A.ux1dPCRIBgEYFl8cEQ/SoP3C','Trieu','Max','123456','thu duc','abc def','2018-08-02 00:00:00','1','1','0');

INSERT INTO `type` (`name`,`descr`,`status`) VALUES ('ca phe hat','hat ca phe nguyen chat','0');

INSERT INTO `items` (`name`,`descr`,`price`,`type`,`status`) VALUES ('ca phe trung nguyen','san pham cua trung nguyen','300000','1','0');