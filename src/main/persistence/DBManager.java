package main.persistence;

import main.Model.CorsoDiLaurea;
import main.Model.Studente;
import main.persistence.dao.CorsoDiLaureaDAO;
import main.persistence.dao.ScuolaDAO;
import main.persistence.dao.StudenteDAO;
import main.persistence.dao.jdbc.CorsoDiLaureaDAOJDBC;
import main.persistence.dao.jdbc.ScuolaDAOJDBC;
import main.persistence.dao.jdbc.StudenteDAOJDBC;

import java.util.List;
import java.util.Scanner;

public class DBManager {
    private static DBManager instance = null;
    static DBSource dataSource;

    static {
        try {
            Class.forName("org.postgresql.Driver");
            //questi vanno messi in file di configurazione!!!
            dataSource = new DBSource("jdbc:postgresql://localhost:5432/WebCompDB1", "postgres", "postgres");
        } catch (Exception e) {
            System.err.println("PostgresDAOFactory.class: failed to load MySQL JDBC driver\n" + e);
            e.printStackTrace();
        }
    }


    public static DBManager getInstance() {
        if (instance == null) {
            instance = new DBManager();
        }
        return instance;
    }

    private DBManager() {
    }

    public static DBSource getDataSource() {
        return dataSource;
    }


    public StudenteDAO studenteDAO() {
        return new StudenteDAOJDBC(dataSource);
    }

    public CorsoDiLaureaDAO corsoDiLaureaDAO () { return new CorsoDiLaureaDAOJDBC(dataSource); }

    public ScuolaDAO scuolaDAO() {
        return new ScuolaDAOJDBC(dataSource);
    }

}
