//import com.mysql.cj.MysqlConnection;
import java.sql.*;

public class App {
    public static void main(String[] args) throws Exception {
        System.out.println("Hello, World!");
        Connection conexao = MySQLConnector.conectar();
    }
}