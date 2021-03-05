using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace CoworkingWebApi.Models
{
    public class DUser
    {
        [Key]
        public int id { get; set; }
        [Column(TypeName="nvarchar(100)")]
        public string login { get; set; }
        [Column(TypeName = "nvarchar(100)")]
        public string password { get; set; }
        [Column(TypeName = "nvarchar(100)")]
        public string fullName { get; set; }
        [Column(TypeName = "nvarchar(100)")]
        public string mobile { get; set; }
        [Column(TypeName = "nvarchar(100)")]
        public string email { get; set; }
        [Column(TypeName = "int")]
        public int age { get; set; }
    }
}
