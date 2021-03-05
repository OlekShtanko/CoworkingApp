using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CoworkingWebApi.Models
{
    public class DUser
    {
        [Key]
        public int id { get; set; }
        public string login { get; set; }
        public string password { get; set; }
        public string fullName { get; set; }
        public string mobile { get; set; }
        public string email { get; set; }
        public int age { get; set; }
    }
}
