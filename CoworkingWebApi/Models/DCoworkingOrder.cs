using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace CoworkingWebApi.Models
{
    public class DCoworkingOrder
    {
        [Key]
        public int id { get; set; }
        [Column(TypeName = "int")]
        public int coworkingId { get; set; }
        [Column(TypeName = "int")]
        public int userId { get; set; }
        [Column(TypeName = "int")]
        public int timeStart { get; set; }
        [Column(TypeName = "int")]
        public int timeFinish { get; set; }

    }
}
