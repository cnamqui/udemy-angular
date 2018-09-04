import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Sample Recipe',
      'Lorem ipsum dolor sit amet',
      'https://c-7npsfqifvt34x24e2v6q4m5x78qbz4lx2edmpvegspoux2eofu.g00.gamepedia.com' +
        '/g00/3_c-7epub3.hbnfqfejb.dpn_/c-7NPSFQIFVT34x24iuuqtx3ax2fx2fe2v6q4m5x78qbz4l' +
        '.dmpvegspou.ofux2fepub3_hbnfqfejbx2f1x2f18x2fBhibojnx2538t_Tdfqufs_jdpo.' +
        'qohx3fwfstjpox3ddd1298878fe5dgddd8eb8320d9d6ed47x26j21d.nbslx3djnbhf_$/$/$/$/$'
    ),
    new Recipe(
      'Sample Recipe',
      'Lorem ipsum dolor sit amet',
      'https://c-7npsfqifvt34x24e2v6q4m5x78qbz4lx2edmpvegspoux2eofu.g00.gamepedia.com/g00/3_c-7epub3.hbnfqfejb.' +
        'dpn_/c-7NPSFQIFVT34x24iuuqtx3ax2fx2fe2v6q4m5x78qbz4l.' +
        'dmpvegspou.ofux2fepub3_hbnfqfejbx2f5x2f5dx2fCmjol_Ebhhfs_jdpo.' +
        'qohx3fwfstjpox3d69c78298ce49636bff4bc5d587c6g45bx26j21d.' +
        'nbslx3djnbhf_$/$/$/$/$'
    )
  ];

  constructor() {}

  ngOnInit() {}
}
