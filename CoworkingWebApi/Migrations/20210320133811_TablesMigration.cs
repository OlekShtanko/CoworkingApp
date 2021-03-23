using Microsoft.EntityFrameworkCore.Migrations;

namespace CoworkingWebApi.Migrations
{
    public partial class TablesMigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "status",
                table: "DUsers",
                type: "nvarchar(100)",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "DCoworkingFunctions",
                columns: table => new
                {
                    id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    coworkingId = table.Column<int>(type: "int", nullable: false),
                    isTea = table.Column<bool>(type: "bit", nullable: false),
                    priceTea = table.Column<double>(type: "float", nullable: false),
                    isCoffee = table.Column<bool>(type: "bit", nullable: false),
                    priceCoffee = table.Column<double>(type: "float", nullable: false),
                    isTable = table.Column<bool>(type: "bit", nullable: false),
                    priceTable = table.Column<double>(type: "float", nullable: false),
                    isChair = table.Column<bool>(type: "bit", nullable: false),
                    priceChair = table.Column<double>(type: "float", nullable: false),
                    isSofa = table.Column<bool>(type: "bit", nullable: false),
                    priceSofa = table.Column<double>(type: "float", nullable: false),
                    isCola = table.Column<bool>(type: "bit", nullable: false),
                    priceCola = table.Column<double>(type: "float", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DCoworkingFunctions", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "DCoworkingOrders",
                columns: table => new
                {
                    id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    coworkingId = table.Column<int>(type: "int", nullable: false),
                    userId = table.Column<int>(type: "int", nullable: false),
                    timeStart = table.Column<string>(type: "nvarchar(Max)", nullable: true),
                    timeFinish = table.Column<string>(type: "nvarchar(Max)", nullable: true),
                    totalCost = table.Column<double>(type: "float", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DCoworkingOrders", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "DCoworkings",
                columns: table => new
                {
                    id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    name = table.Column<string>(type: "nvarchar(100)", nullable: true),
                    ownerId = table.Column<int>(type: "int", nullable: false),
                    lng = table.Column<double>(type: "float", nullable: false),
                    lat = table.Column<double>(type: "float", nullable: false),
                    adress = table.Column<string>(type: "nvarchar(100)", nullable: true),
                    info = table.Column<string>(type: "nvarchar(100)", nullable: true),
                    image = table.Column<string>(type: "nvarchar(Max)", nullable: true),
                    defaultPrice = table.Column<string>(type: "nvarchar(100)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DCoworkings", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "DFunctions",
                columns: table => new
                {
                    id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    functionName = table.Column<string>(type: "nvarchar(100)", nullable: true),
                    image = table.Column<string>(type: "nvarchar(Max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DFunctions", x => x.id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "DCoworkingFunctions");

            migrationBuilder.DropTable(
                name: "DCoworkingOrders");

            migrationBuilder.DropTable(
                name: "DCoworkings");

            migrationBuilder.DropTable(
                name: "DFunctions");

            migrationBuilder.DropColumn(
                name: "status",
                table: "DUsers");
        }
    }
}
