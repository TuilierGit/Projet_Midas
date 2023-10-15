
#include <stdio.h>
#include <stdlib.h>
#include <string.h>



void ** read_a_line_with_n_elements(char * ligne, char * separator, int n) {
    char * token = strtok(ligne, separator);
    void ** Tab_line = malloc(n * sizeof(void *));
    
    for (int i = 0; i < n; i++) {
        if (token != NULL) {
            Tab_line[i] = malloc((strlen(token) + 1) * sizeof(char));
            strcpy((char *)Tab_line[i], token);
            token = strtok(NULL, separator);
        } else {
            // Gérer le cas où il n'y a pas suffisamment de tokens
            Tab_line[i] = NULL;
        }
    }
    
    return Tab_line;
}



void ** read_a_line(char * ligne, char * separator){
    return read_a_line_with_n_elements(ligne,separator, 9);
}


void *** read_a_csv_file(FILE * fichier){
    char line[500];
    char * separator = ";";
    int number_of_the_line = 0;

    void *** myFile = malloc(500 * sizeof(void**));

    while (fgets(line, sizeof(line), fichier) != NULL) {
        void ** myLine = read_a_line(line, separator);
        printf("Ligne %d --> ",number_of_the_line);
        for (int j = 0 ; j < 9 ; j++){
            void * element_j = myLine[j];
            char *charElement = (char *) element_j;
            if ( j < 8){
                printf("%s / ", charElement );
            }
            else {
                printf("%s \n\n", charElement );
            }
        }
        myFile[number_of_the_line] = myLine;
        number_of_the_line++;
    }

    return myFile;
}


void free_my_file(void *** file){
    for(int id_line = 0; id_line < 500; id_line++){
        //printf("free line %d\n",i);
        if (file[id_line] != NULL){
            for (int id_element = 0 ; id_element < 9; ++id_element){
                if (file[id_line][id_element] != NULL){
                    free(file[id_line][id_element]);
                }
                //printf("\t free element %d\n",j);
            }
            free(file[id_line]);
            //printf("OK \n\n;");
        }
    }
    free(file);
}


int main(int arc, char * argv){
    char * nom_du_fichier = "./../data/comptes.csv";

    FILE *fichier = fopen(nom_du_fichier, "r");

    if (fichier == NULL){
        printf("ERROR : Lecture du fichier %s impossible",nom_du_fichier);
        return 1;
    }
    
    void *** myFile = read_a_csv_file(fichier);
    
    fclose(fichier);

    free_my_file(myFile);
    return 0;
}