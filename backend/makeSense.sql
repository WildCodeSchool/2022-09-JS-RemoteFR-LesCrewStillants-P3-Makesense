DROP TABLE IF EXISTS user;

CREATE TABLE user (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  firstname VARCHAR (50) NOT NULL,
  lastname VARCHAR (50) NOT NULL,
  birthday DATE NOT NULL,
  user_role VARCHAR(50) NOT NULL,
  email VARCHAR(255) NOT NULL,
  pw VARCHAR(255) NOT NULL,
  matricule VARCHAR(255) UNIQUE NOT NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb3;

DROP TABLE IF EXISTS timeline;

CREATE TABLE timeline(
id INT PRIMARY KEY AUTO_INCREMENT,
start DATE NOT NULL,
dl_1 DATE NOT NULL,
first_decision DATE NOT NULL,
dl_2 DATE NOT NULL,
final_decision DATE NOT NULL
)ENGINE = InnoDB DEFAULT CHARSET = utf8mb3;

DROP TABLE IF EXISTS decision;

CREATE TABLE decision(
  id INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(255) NOT NULL,
  desc_start LONGTEXT,
  desc_first LONGTEXT,
  desc_final LONGTEXT,
  details LONGTEXT,
  impact LONGTEXT,
  benefits LONGTEXT,
  risk LONGTEXT,
  date DATETIME NOT NULL,
  statut TINYINT(1),
  user_id INT NOT NULL,
  timeline_id INT,
  CONSTRAINT fk_decision_user FOREIGN KEY (user_id) REFERENCES user(id),
  CONSTRAINT fk_timeline_decision FOREIGN KEY(timeline_id) REFERENCES timeline(id)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb3;

DROP TABLE IF EXISTS comment;

CREATE TABLE comment(
  id INT PRIMARY KEY AUTO_INCREMENT,
  date DATETIME NOT NULL,
  comment VARCHAR(150) NOT NULL,
  type TINYINT(1),
  user_id INT NOT NULL,
  decision_id INT NOT NULL,
  CONSTRAINT fk_user_comment FOREIGN KEY (user_id) REFERENCES user(id),
  CONSTRAINT fk_user_decision FOREIGN KEY (decision_id) REFERENCES decision(id)
);
