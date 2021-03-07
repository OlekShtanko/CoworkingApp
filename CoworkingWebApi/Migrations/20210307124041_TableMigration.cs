using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace CoworkingWebApi.Migrations
{
    public partial class TableMigration : Migration
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
                    functionId = table.Column<int>(type: "int", nullable: false),
                    price = table.Column<double>(type: "float", nullable: false)
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
                    timeStart = table.Column<int>(type: "int", nullable: false),
                    timeFinish = table.Column<int>(type: "int", nullable: false)
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
                    ownerId = table.Column<int>(type: "int", nullable: false),
                    lng = table.Column<double>(type: "float", nullable: false),
                    lat = table.Column<double>(type: "float", nullable: false),
                    adress = table.Column<string>(type: "nvarchar(100)", nullable: true),
                    info = table.Column<string>(type: "nvarchar(100)", nullable: true),
                    image = table.Column<byte[]>(nullable: true)
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
                    image = table.Column<byte[]>(type: "image", nullable: true)
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
